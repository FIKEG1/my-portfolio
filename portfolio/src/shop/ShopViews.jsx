import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Heart, Minus, Plus, Sparkles, Star } from 'lucide-react'
import { categories, formatPrice, getProduct, products, recommendProducts, searchProducts } from './products.js'
import { useShop } from './ShopContext.jsx'

function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useShop()
  const saved = wishlist.includes(product.id)

  return (
    <article className="aura-card">
      <Link className="aura-card-media" to={`/aura/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        {product.badge ? <span className="aura-badge">{product.badge}</span> : null}
      </Link>
      <button
        type="button"
        className={`aura-wish${saved ? ' is-on' : ''}`}
        aria-label={saved ? 'Remove from saved' : 'Save item'}
        onClick={() => toggleWishlist(product.id)}
      >
        <Heart size={15} fill={saved ? 'currentColor' : 'none'} />
      </button>
      <div className="aura-card-body">
        <h3>
          <Link to={`/aura/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p>{product.blurb}</p>
        <span className="aura-rating">
          <Star size={12} fill="currentColor" /> {product.rating} · {product.reviews} reviews
        </span>
        <div className="aura-price">
          <strong>{formatPrice(product.price)}</strong>
          {product.compareAt ? <s>{formatPrice(product.compareAt)}</s> : null}
        </div>
        <button type="button" className="aura-btn gold" onClick={() => addToCart(product.id)}>
          Add to bag
        </button>
      </div>
    </article>
  )
}

function ProductGrid({ items }) {
  if (!items.length) {
    return <p className="aura-empty">No matches. Try a broader search, or ask the assistant in the corner.</p>
  }
  return (
    <div className="aura-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export function ShopHome() {
  const { recommendations, viewed } = useShop()
  const featured = products[0]
  const because = viewed.length
    ? recommendProducts({ viewed, exclude: viewed.slice(0, 1), limit: 4 })
    : products.filter((item) => item.badge).slice(0, 4)

  return (
    <>
      <section className="aura-hero">
        <div className="aura-hero-copy">
          <p className="aura-kicker">
            <Sparkles size={14} /> Smart commerce
          </p>
          <h1>Shop with a store that learns what you like.</h1>
          <p>
            AURA ranks products from what you browse, save, and add to your bag. Search in plain language —
            “gift under $50”, “quiet desk setup” — and the catalog answers in kind.
          </p>
          <div className="aura-cta-row">
            <Link className="aura-btn gold" to="/aura/shop">
              Browse catalog
            </Link>
            <Link className="aura-btn ghost" to={`/aura/product/${featured.id}`}>
              See the editor pick
            </Link>
          </div>
        </div>
        <Link className="aura-featured" to={`/aura/product/${featured.id}`}>
          <img src={featured.image} alt={featured.name} />
          <div className="aura-featured-meta">
            <strong>{featured.name}</strong>
            <span>
              {featured.badge} · {formatPrice(featured.price)}
            </span>
          </div>
        </Link>
      </section>

      <div className="aura-section-head">
        <div>
          <h2>{viewed.length ? 'Because you were looking' : 'Editor selections'}</h2>
          <p>
            {viewed.length
              ? 'Ranked from your recent views, not a generic bestseller list.'
              : 'Start browsing and this row becomes personal.'}
          </p>
        </div>
        <Link to="/aura/shop">All products</Link>
      </div>
      <ProductGrid items={because} />

      <div className="aura-section-head" style={{ marginTop: '2.2rem' }}>
        <div>
          <h2>Recommended for you</h2>
          <p>Affinity scoring across category, tags, and frequently paired items.</p>
        </div>
      </div>
      <ProductGrid items={recommendations.slice(0, 4)} />
    </>
  )
}

export function ShopCatalog() {
  const [params, setParams] = useSearchParams()
  const category = params.get('cat') || 'all'
  const query = params.get('q') || ''
  const items = useMemo(() => searchProducts(query, category), [query, category])

  return (
    <>
      <div className="aura-section-head">
        <div>
          <h2>Catalog</h2>
          <p>
            {`${items.length} ${items.length === 1 ? 'product' : 'products'}${query ? ` for “${query}”` : ''}`}
          </p>
        </div>
      </div>
      <div className="aura-pills">
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            className={category === item.id ? 'is-on' : ''}
            onClick={() => {
              const next = new URLSearchParams(params)
              if (item.id === 'all') next.delete('cat')
              else next.set('cat', item.id)
              setParams(next)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ProductGrid items={items} />
    </>
  )
}

export function ShopProduct() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addToCart, trackView, wishlist, toggleWishlist, cartIds } = useShop()
  const [qty, setQty] = useState(1)

  useEffect(() => {
    if (product) trackView(product.id)
  }, [product?.id])

  if (!product) {
    return (
      <div className="aura-empty">
        <p>That product is not in the catalog.</p>
        <Link className="aura-btn" to="/aura/shop">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = recommendProducts({
    viewed: [product.id],
    cartIds,
    exclude: [product.id],
    limit: 4,
  })
  const saved = wishlist.includes(product.id)

  return (
    <>
      <article className="aura-product">
        <img src={product.image} alt={product.name} />
        <div>
          <p className="aura-kicker">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="aura-meta">
            <span>
              <Star size={14} fill="#d7b56d" color="#d7b56d" /> {product.rating} ({product.reviews})
            </span>
            <span>{product.stock} in stock</span>
            {product.badge ? <span>{product.badge}</span> : null}
          </div>
          <div className="aura-price" style={{ fontSize: '1.4rem', margin: '1rem 0' }}>
            <strong>{formatPrice(product.price)}</strong>
            {product.compareAt ? <s>{formatPrice(product.compareAt)}</s> : null}
          </div>
          <p style={{ color: 'var(--aura-mute)', lineHeight: 1.6 }}>{product.details}</p>
          <div className="aura-cta-row">
            <div className="aura-qty">
              <button type="button" onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">
                <Minus size={14} />
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((n) => n + 1)} aria-label="Increase quantity">
                <Plus size={14} />
              </button>
            </div>
            <button type="button" className="aura-btn gold" onClick={() => addToCart(product.id, qty)}>
              Add to bag
            </button>
            <button type="button" className="aura-btn ghost" onClick={() => toggleWishlist(product.id)}>
              <Heart size={16} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </article>
      <div className="aura-section-head" style={{ marginTop: '2.4rem' }}>
        <div>
          <h2>Often paired</h2>
          <p>{`Items that share tags or are frequently bought with ${product.name}.`}</p>
        </div>
      </div>
      <ProductGrid items={related} />
    </>
  )
}

export function ShopCart() {
  const { cartLines, setQty, removeFromCart, subtotal, bundleDiscount, shipping, total } = useShop()
  const recommendations = recommendProducts({
    cartIds: cartLines.map((item) => item.id),
    exclude: cartLines.map((item) => item.id),
    limit: 4,
  })

  if (!cartLines.length) {
    return (
      <div className="aura-empty">
        <h2>Your bag is empty</h2>
        <p>Browse the catalog or ask the assistant for a short list.</p>
        <Link className="aura-btn gold" to="/aura/shop" style={{ marginTop: '1rem' }}>
          Start shopping
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="aura-section-head">
        <div>
          <h2>Bag</h2>
          <p>{cartLines.length} line{cartLines.length === 1 ? '' : 's'}</p>
        </div>
      </div>
      <div className="aura-cart-layout">
        <div>
          {cartLines.map((line) => (
            <div className="aura-line" key={line.id}>
              <img src={line.image} alt="" />
              <div>
                <Link to={`/aura/product/${line.id}`}>
                  <strong>{line.name}</strong>
                </Link>
                <p style={{ color: 'var(--aura-mute)', margin: '0.2rem 0 0.5rem' }}>{formatPrice(line.price)}</p>
                <div className="aura-qty">
                  <button type="button" onClick={() => setQty(line.id, line.qty - 1)}>
                    <Minus size={14} />
                  </button>
                  <span>{line.qty}</span>
                  <button type="button" onClick={() => setQty(line.id, line.qty + 1)}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong>{formatPrice(line.lineTotal)}</strong>
                <button type="button" className="aura-btn ghost" style={{ marginTop: '0.5rem' }} onClick={() => removeFromCart(line.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <aside className="aura-summary">
          <h3>Summary</h3>
          <div className="aura-summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          {bundleDiscount ? (
            <div className="aura-summary-row">
              <span>Bundle 10% (3+ items)</span>
              <span>-{formatPrice(bundleDiscount)}</span>
            </div>
          ) : (
            <div className="aura-summary-row">
              <span>Bundle</span>
              <span>Add more for 10% off</span>
            </div>
          )}
          <div className="aura-summary-row">
            <span>Shipping</span>
            <span>{shipping ? formatPrice(shipping) : 'Free over $80'}</span>
          </div>
          <div className="aura-summary-row total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link className="aura-btn gold" to="/aura/checkout" style={{ width: '100%', marginTop: '1rem' }}>
            Checkout
          </Link>
        </aside>
      </div>
      <div className="aura-section-head" style={{ marginTop: '2.2rem' }}>
        <div>
          <h2>Complete the look</h2>
          <p>Suggested from items already in your bag.</p>
        </div>
      </div>
      <ProductGrid items={recommendations} />
    </>
  )
}

export function ShopCheckout() {
  const navigate = useNavigate()
  const { cartLines, subtotal, bundleDiscount, shipping, total, placeOrder } = useShop()
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    payment: 'card',
  })

  if (!cartLines.length) {
    return (
      <div className="aura-empty">
        <p>Nothing to check out yet.</p>
        <Link className="aura-btn" to="/aura/shop">
          Browse products
        </Link>
      </div>
    )
  }

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    const order = placeOrder(form)
    navigate(`/aura/orders?placed=${order.id}`)
  }

  return (
    <>
      <div className="aura-section-head">
        <div>
          <h2>Checkout</h2>
          <p>Demo only — no payment is sent anywhere.</p>
        </div>
      </div>
      <form className="aura-checkout" onSubmit={submit}>
        <div className="aura-form">
          <label>
            Full name
            <input name="name" required value={form.name} onChange={update} />
          </label>
          <label>
            Email
            <input name="email" type="email" required value={form.email} onChange={update} />
          </label>
          <label>
            Address
            <input name="address" required value={form.address} onChange={update} />
          </label>
          <label>
            City
            <input name="city" required value={form.city} onChange={update} />
          </label>
          <label>
            Payment
            <select name="payment" value={form.payment} onChange={update}>
              <option value="card">Card (simulated)</option>
              <option value="cod">Cash on delivery</option>
            </select>
          </label>
          <button className="aura-btn gold" type="submit">
            Place order · {formatPrice(total)}
          </button>
        </div>
        <aside className="aura-summary">
          {cartLines.map((line) => (
            <div className="aura-summary-row" key={line.id}>
              <span>
                {line.name} × {line.qty}
              </span>
              <span>{formatPrice(line.lineTotal)}</span>
            </div>
          ))}
          <div className="aura-summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          {bundleDiscount ? (
            <div className="aura-summary-row">
              <span>Discount</span>
              <span>-{formatPrice(bundleDiscount)}</span>
            </div>
          ) : null}
          <div className="aura-summary-row">
            <span>Shipping</span>
            <span>{shipping ? formatPrice(shipping) : 'Free'}</span>
          </div>
          <div className="aura-summary-row total">
            <span>Due</span>
            <span>{formatPrice(total)}</span>
          </div>
        </aside>
      </form>
    </>
  )
}

export function ShopOrders() {
  const [params] = useSearchParams()
  const { orders } = useShop()
  const placed = params.get('placed')
  const latest = orders.find((order) => order.id === placed)

  return (
    <>
      {latest ? (
        <div className="aura-success">
          <p className="aura-kicker">Order confirmed</p>
          <h1>Thank you. AURA is packing {latest.id}.</h1>
          <p style={{ color: 'var(--aura-mute)' }}>
            This is a local demo. The receipt stays in your browser until you clear site data.
          </p>
          <div className="aura-cta-row" style={{ justifyContent: 'center' }}>
            <Link className="aura-btn gold" to="/aura/shop">
              Keep shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="aura-section-head">
          <div>
            <h2>Orders</h2>
            <p>Stored on this device only.</p>
          </div>
        </div>
      )}
      {!orders.length ? (
        <p className="aura-empty">No orders yet.</p>
      ) : (
        <div className="aura-orders">
          {orders.map((order) => (
            <article className="aura-order" key={order.id}>
              <strong>{order.id}</strong>
              <p style={{ color: 'var(--aura-mute)', margin: '0.3rem 0 0.7rem' }}>
                {new Date(order.placedAt).toLocaleString()} · {formatPrice(order.total)} · {order.details.name}
              </p>
              {order.items.map((item) => (
                <div key={item.id} className="aura-summary-row">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </article>
          ))}
        </div>
      )}
    </>
  )
}

export function ShopSaved() {
  const { wishlist } = useShop()
  const items = wishlist.map(getProduct).filter(Boolean)
  return (
    <>
      <div className="aura-section-head">
        <div>
          <h2>Saved</h2>
          <p>Wishlist items stay on this device.</p>
        </div>
      </div>
      <ProductGrid items={items} />
    </>
  )
}
