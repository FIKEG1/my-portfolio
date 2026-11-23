import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct, recommendProducts } from './products.js'

const STORAGE_KEY = 'aura-shop-state-v1'
const ShopContext = createContext(null)

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function ShopProvider({ children }) {
  const saved = loadState()
  const [cart, setCart] = useState(saved?.cart || [])
  const [wishlist, setWishlist] = useState(saved?.wishlist || [])
  const [viewed, setViewed] = useState(saved?.viewed || [])
  const [orders, setOrders] = useState(saved?.orders || [])
  const [toast, setToast] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, wishlist, viewed, orders }))
  }, [cart, wishlist, viewed, orders])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(''), 2200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const notify = (message) => setToast(message)

  const addToCart = (id, qty = 1) => {
    const product = getProduct(id)
    if (!product) return
    setCart((current) => {
      const existing = current.find((item) => item.id === id)
      if (existing) {
        return current.map((item) => (item.id === id ? { ...item, qty: item.qty + qty } : item))
      }
      return [...current, { id, qty }]
    })
    notify(`${product.name} added to bag`)
  }

  const setQty = (id, qty) => {
    setCart((current) => {
      if (qty <= 0) return current.filter((item) => item.id !== id)
      return current.map((item) => (item.id === id ? { ...item, qty } : item))
    })
  }

  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id))

  const toggleWishlist = (id) => {
    const product = getProduct(id)
    setWishlist((current) => {
      if (current.includes(id)) {
        notify(`${product?.name || 'Item'} removed from saved`)
        return current.filter((item) => item !== id)
      }
      notify(`${product?.name || 'Item'} saved`)
      return [...current, id]
    })
  }

  const trackView = (id) => {
    setViewed((current) => [id, ...current.filter((item) => item !== id)].slice(0, 16))
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const cartIds = cart.map((item) => item.id)
  const cartLines = cart
    .map((line) => {
      const product = getProduct(line.id)
      return product ? { ...product, qty: line.qty, lineTotal: product.price * line.qty } : null
    })
    .filter(Boolean)
  const subtotal = cartLines.reduce((sum, line) => sum + line.lineTotal, 0)
  const bundleDiscount = cartCount >= 3 ? Math.round(subtotal * 0.1) : 0
  const shipping = subtotal - bundleDiscount >= 80 || subtotal === 0 ? 0 : 8
  const total = subtotal - bundleDiscount + shipping

  // The saved order uses the same totals the checkout page just showed,
  // so the receipt always matches the "Place order" amount.
  const placeOrder = (details) => {
    const order = {
      id: `AURA-${Date.now().toString(36).toUpperCase()}`,
      placedAt: new Date().toISOString(),
      details,
      items: cartLines.map(({ id, qty, name, price, image }) => ({ id, qty, name, price, image })),
      subtotal,
      discount: bundleDiscount,
      shipping,
      total,
    }
    setOrders((current) => [order, ...current])
    setCart([])
    notify('Order placed')
    return order
  }

  const recommendations = useMemo(
    () => recommendProducts({ viewed, cartIds, wishlist, exclude: cartIds, limit: 6 }),
    [viewed, cart, wishlist],
  )

  const value = {
    cart,
    cartLines,
    cartCount,
    cartIds,
    subtotal,
    bundleDiscount,
    shipping,
    total,
    wishlist,
    viewed,
    orders,
    toast,
    recommendations,
    addToCart,
    setQty,
    removeFromCart,
    toggleWishlist,
    trackView,
    placeOrder,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const value = useContext(ShopContext)
  if (!value) throw new Error('useShop must be used inside ShopProvider')
  return value
}
