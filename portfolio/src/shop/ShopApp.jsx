import { useState } from 'react'
import { Link, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { Bot, Heart, Search, ShoppingBag } from 'lucide-react'
import { assistantReply } from './products.js'
import { ShopProvider, useShop } from './ShopContext.jsx'
import {
  ShopCart,
  ShopCatalog,
  ShopCheckout,
  ShopHome,
  ShopOrders,
  ShopProduct,
  ShopSaved,
} from './ShopViews.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import './shop.css'

function Assistant() {
  const { viewed, cartIds, wishlist, addToCart } = useShop()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [log, setLog] = useState([
    {
      role: 'bot',
      copy: 'I am Aura Guide. Ask for a gift, a budget, or a setup — I will shortlist from the catalog.',
      picks: [],
    },
  ])

  const send = (event) => {
    event.preventDefault()
    const text = input.trim()
    if (!text) return
    const reply = assistantReply(text, { viewed, cartIds, wishlist })
    setLog((current) => [...current, { role: 'me', copy: text, picks: [] }, { role: 'bot', ...reply }])
    setInput('')
  }

  return (
    <div className="aura-assist">
      {open ? (
        <div className="aura-assist-panel" role="dialog" aria-label="Aura shopping assistant">
          <div className="aura-assist-log">
            {log.map((entry, index) => (
              <div key={`${entry.role}-${index}`}>
                <div className={`aura-bubble ${entry.role}`}>{entry.copy}</div>
                {entry.picks?.map((pick) => (
                  <div className="aura-pick" key={pick.id}>
                    <img src={pick.image} alt="" />
                    <div>
                      <Link to={`/aura/product/${pick.id}`}>{pick.name}</Link>
                      <div style={{ fontSize: '0.78rem', color: 'var(--aura-mute)' }}>
                        {pick.price ? `$${pick.price}` : ''}
                      </div>
                    </div>
                    <button type="button" className="aura-btn gold" style={{ padding: '0.35rem 0.6rem' }} onClick={() => addToCart(pick.id)}>
                      Add
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <form className="aura-assist-form" onSubmit={send}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Gift under $50, quiet headphones…"
              aria-label="Ask the shopping assistant"
            />
            <button className="aura-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      ) : null}
      <button className="aura-assist-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle shopping assistant">
        <Bot size={22} />
      </button>
    </div>
  )
}

function ShopLayout() {
  const navigate = useNavigate()
  const { cartCount, wishlist, toast } = useShop()
  const [query, setQuery] = useState('')

  const search = (event) => {
    event.preventDefault()
    const next = query.trim()
    navigate(next ? `/aura/shop?q=${encodeURIComponent(next)}` : '/aura/shop')
  }

  return (
    <div className="aura-page">
      <header className="aura-header">
        <Link className="aura-logo" to="/aura">
          <span className="aura-mark">A</span>
          AURA
        </Link>
        <form className="aura-search" onSubmit={search}>
          <Search size={16} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products or intent — gift under $50"
            aria-label="Search the catalog"
          />
          <button type="submit" className="aura-search-go">
            Search
          </button>
        </form>
        <div className="aura-header-actions">
          <NavLink className="aura-icon-btn" to="/aura/saved" aria-label="Saved items">
            <Heart size={18} />
            {wishlist.length ? <span className="aura-count">{wishlist.length}</span> : null}
          </NavLink>
          <NavLink className="aura-icon-btn" to="/aura/cart" aria-label={`Shopping bag, ${cartCount} items`}>
            <ShoppingBag size={18} />
            {cartCount ? <span className="aura-count">{cartCount}</span> : null}
          </NavLink>
          <Link className="aura-back" to="/">
            Portfolio
          </Link>
        </div>
      </header>
      <main className="aura-main">
        <Outlet />
      </main>
      <Assistant />
      {toast ? <div className="aura-toast" role="status">{toast}</div> : null}
    </div>
  )
}

export default function ShopApp() {
  useDocumentTitle('AURA Smart Commerce | Demo storefront')

  return (
    <ShopProvider>
      <Routes>
        <Route element={<ShopLayout />}>
          <Route index element={<ShopHome />} />
          <Route path="shop" element={<ShopCatalog />} />
          <Route path="product/:id" element={<ShopProduct />} />
          <Route path="cart" element={<ShopCart />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="orders" element={<ShopOrders />} />
          <Route path="saved" element={<ShopSaved />} />
        </Route>
      </Routes>
    </ShopProvider>
  )
}
