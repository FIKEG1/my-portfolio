export const categories = [
  { id: 'all', label: 'All' },
  { id: 'audio', label: 'Audio' },
  { id: 'tech', label: 'Tech' },
  { id: 'home', label: 'Home' },
  { id: 'wear', label: 'Wear' },
  { id: 'wellness', label: 'Wellness' },
]

export const products = [
  {
    id: 'pulse-headphones',
    name: 'Aura Pulse Headphones',
    category: 'audio',
    price: 189,
    compareAt: 229,
    rating: 4.8,
    reviews: 214,
    stock: 18,
    badge: 'Editor pick',
    tags: ['wireless', 'noise-cancelling', 'commute', 'gift', 'work'],
    pairsWith: ['orbit-speaker', 'nova-watch'],
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Studio-quiet focus with 36 hours of battery and a warm, detailed soundstage.',
    details:
      'Adaptive noise cancelling, memory-foam cups, and a USB-C dongle for calls. Tuned for long work sessions without ear fatigue.',
  },
  {
    id: 'orbit-speaker',
    name: 'Orbit Portable Speaker',
    category: 'audio',
    price: 79,
    compareAt: 99,
    rating: 4.6,
    reviews: 168,
    stock: 32,
    badge: 'On sale',
    tags: ['bluetooth', 'outdoor', 'gift', 'travel'],
    pairsWith: ['pulse-headphones', 'apex-backpack'],
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&q=80',
    blurb: 'A compact speaker with a surprisingly wide stereo image and a 12-hour charge.',
    details: 'IPX5 splash resistance, USB-C charging, and a carry loop that clips to a bag.',
  },
  {
    id: 'nova-watch',
    name: 'Nova Smartwatch',
    category: 'tech',
    price: 249,
    compareAt: null,
    rating: 4.7,
    reviews: 301,
    stock: 14,
    badge: 'Smart pick',
    tags: ['wearable', 'fitness', 'notifications', 'work'],
    pairsWith: ['nimbus-shoes', 'pulse-headphones'],
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Sleep, training load, and calendar cues on a sapphire display that lasts 5 days.',
    details: 'GPS, heart-rate recovery, and a silent haptic alarm. Pairs with the Aura app for coaching.',
  },
  {
    id: 'drift-keyboard',
    name: 'Drift Wireless Keyboard',
    category: 'tech',
    price: 129,
    compareAt: 149,
    rating: 4.5,
    reviews: 97,
    stock: 21,
    badge: '',
    tags: ['work', 'desk', 'mechanical', 'quiet'],
    pairsWith: ['volt-hub', 'lumen-lamp'],
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Low-profile switches and a warm backlight for late writing sessions.',
    details: 'Multi-device Bluetooth, USB-C passthrough, and a battery that lasts three weeks.',
  },
  {
    id: 'volt-hub',
    name: 'Volt USB-C Hub',
    category: 'tech',
    price: 59,
    compareAt: null,
    rating: 4.4,
    reviews: 142,
    stock: 40,
    badge: '',
    tags: ['work', 'travel', 'laptop', 'desk'],
    pairsWith: ['drift-keyboard', 'nova-watch'],
    image:
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Eight ports, 100W pass-through, and a compact aluminum body for travel desks.',
    details: 'HDMI 4K, SD, two USB-A, two USB-C, and gigabit ethernet without dongle clutter.',
  },
  {
    id: 'lumen-lamp',
    name: 'Lumen Desk Lamp',
    category: 'home',
    price: 88,
    compareAt: 110,
    rating: 4.9,
    reviews: 76,
    stock: 11,
    badge: 'Low stock',
    tags: ['desk', 'lighting', 'work', 'warm'],
    pairsWith: ['drift-keyboard', 'cloud-throw'],
    image:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Tunable white light that follows your circadian rhythm from focus to wind-down.',
    details: 'Touch dimming, USB-C, and a weighted base. Three presets: focus, evening, and read.',
  },
  {
    id: 'ember-mugs',
    name: 'Ember Ceramic Mug Set',
    category: 'home',
    price: 42,
    compareAt: null,
    rating: 4.7,
    reviews: 188,
    stock: 54,
    badge: 'Gift',
    tags: ['gift', 'kitchen', 'ceramic', 'under-50'],
    pairsWith: ['arc-espresso', 'stillness-journal'],
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=80',
    blurb: 'A pair of speckled stoneware mugs that stay comfortable in the hand.',
    details: 'Dishwasher safe, 320ml each, made for slow mornings and video-call tea.',
  },
  {
    id: 'cloud-throw',
    name: 'Cloud Linen Throw',
    category: 'home',
    price: 96,
    compareAt: null,
    rating: 4.6,
    reviews: 64,
    stock: 19,
    badge: '',
    tags: ['textile', 'soft', 'living-room', 'gift'],
    pairsWith: ['lumen-lamp', 'terra-plants'],
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Washed linen with a stonewashed drape for sofas, reading chairs, and travel.',
    details: '140 × 180 cm. Gets softer with every wash. Neutral oat color that photographs well.',
  },
  {
    id: 'arc-espresso',
    name: 'Arc Espresso Maker',
    category: 'home',
    price: 164,
    compareAt: 190,
    rating: 4.5,
    reviews: 53,
    stock: 9,
    badge: 'On sale',
    tags: ['kitchen', 'coffee', 'morning', 'gift'],
    pairsWith: ['ember-mugs', 'stillness-journal'],
    image:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80',
    blurb: 'A compact 15-bar machine that pulls a clean shot without dominating the counter.',
    details: 'Steam wand, 1.2L tank, and a warming plate. Ready in under 40 seconds.',
  },
  {
    id: 'nimbus-shoes',
    name: 'Nimbus Running Shoes',
    category: 'wear',
    price: 138,
    compareAt: null,
    rating: 4.6,
    reviews: 221,
    stock: 26,
    badge: '',
    tags: ['running', 'fitness', 'everyday', 'comfort'],
    pairsWith: ['nova-watch', 'apex-backpack'],
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Responsive foam and a breathable knit upper for daily kilometers.',
    details: 'Drop 8mm, recycled mesh, and a outsole that grips wet pavement.',
  },
  {
    id: 'apex-backpack',
    name: 'Apex Commuter Backpack',
    category: 'wear',
    price: 118,
    compareAt: 140,
    rating: 4.8,
    reviews: 119,
    stock: 16,
    badge: 'Editor pick',
    tags: ['travel', 'work', 'laptop', 'everyday'],
    pairsWith: ['volt-hub', 'orbit-speaker'],
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
    blurb: 'A 20L pack with a padded 16-inch sleeve and a hidden passport pocket.',
    details: 'Water-resistant canvas, luggage pass-through, and a bottle pocket that actually holds a bottle.',
  },
  {
    id: 'solstice-shades',
    name: 'Solstice Sunglasses',
    category: 'wear',
    price: 74,
    compareAt: 92,
    rating: 4.4,
    reviews: 88,
    stock: 28,
    badge: 'On sale',
    tags: ['summer', 'gift', 'style', 'travel'],
    pairsWith: ['canvas-tote', 'nimbus-shoes'],
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237ac008?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Polarized lenses in a light acetate frame that sits comfortably all afternoon.',
    details: 'UV400, scratch-resistant coating, and a case that fits a jacket pocket.',
  },
  {
    id: 'canvas-tote',
    name: 'Canvas Weekend Tote',
    category: 'wear',
    price: 54,
    compareAt: null,
    rating: 4.3,
    reviews: 71,
    stock: 33,
    badge: '',
    tags: ['everyday', 'market', 'travel', 'under-80'],
    pairsWith: ['solstice-shades', 'cloud-throw'],
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Heavy canvas with leather handles for markets, libraries, and short trips.',
    details: 'Interior zip pocket, magnetic close, and a silhouette that stands on its own.',
  },
  {
    id: 'terra-plants',
    name: 'Terra Desktop Plant Kit',
    category: 'wellness',
    price: 36,
    compareAt: null,
    rating: 4.7,
    reviews: 134,
    stock: 47,
    badge: 'Gift',
    tags: ['plants', 'desk', 'gift', 'under-50', 'calm'],
    pairsWith: ['lumen-lamp', 'halo-serum'],
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
    blurb: 'A pothos cutting, ceramic pot, and soil disk — ready in ten minutes.',
    details: 'Includes a care card and a moisture stick. Low light friendly.',
  },
  {
    id: 'halo-serum',
    name: 'Halo Skin Serum',
    category: 'wellness',
    price: 48,
    compareAt: 58,
    rating: 4.5,
    reviews: 203,
    stock: 22,
    badge: 'On sale',
    tags: ['skincare', 'ritual', 'gift', 'under-50'],
    pairsWith: ['stillness-journal', 'terra-plants'],
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    blurb: 'A light niacinamide serum for even tone without a sticky finish.',
    details: 'Fragrance-free, 30ml dropper, and a formula that layers under sunscreen.',
  },
  {
    id: 'stillness-journal',
    name: 'Stillness Daily Journal',
    category: 'wellness',
    price: 28,
    compareAt: null,
    rating: 4.9,
    reviews: 156,
    stock: 61,
    badge: 'Gift',
    tags: ['writing', 'ritual', 'gift', 'under-50', 'calm'],
    pairsWith: ['ember-mugs', 'halo-serum'],
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Undated prompts for three lines a day — enough structure, never a chore.',
    details: 'Lay-flat binding, fountain-pen friendly paper, 192 pages.',
  },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

export function getProduct(id) {
  return products.find((item) => item.id === id)
}

export function searchProducts(query, category = 'all') {
  const pool = category === 'all' ? products : products.filter((item) => item.category === category)
  const raw = query.trim().toLowerCase()
  if (!raw) return pool.map((item) => ({ ...item, score: 1 }))

  const under = raw.match(/under\s*\$?\s*(\d+)/)
  const max = under ? Number(under[1]) : null
  const tokens = raw
    .replace(/under\s*\$?\s*\d+/g, '')
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 1)

  const intents = {
    gift: (item) => item.tags.includes('gift') || item.price <= 80,
    work: (item) => item.tags.includes('work') || item.tags.includes('desk'),
    travel: (item) => item.tags.includes('travel') || item.tags.includes('commute'),
    calm: (item) => item.tags.includes('calm') || item.category === 'wellness',
    coffee: (item) => item.id.includes('espresso') || item.id.includes('mug'),
    running: (item) => item.tags.includes('running') || item.tags.includes('fitness'),
  }

  return pool
    .map((item) => {
      let score = 0
      const hay = `${item.name} ${item.blurb} ${item.details} ${item.tags.join(' ')} ${item.category}`.toLowerCase()
      tokens.forEach((token) => {
        if (item.name.toLowerCase().includes(token)) score += 6
        else if (item.tags.some((tag) => tag.includes(token))) score += 4
        else if (hay.includes(token)) score += 2
        if (intents[token]?.(item)) score += 5
      })
      if (max != null) score += item.price <= max ? 8 : -12
      if (raw.includes('sale') && item.compareAt) score += 4
      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
}

export function recommendProducts({ viewed = [], cartIds = [], wishlist = [], exclude = [], limit = 4 } = {}) {
  const seeds = [...viewed.slice(-10), ...cartIds, ...wishlist]
    .map(getProduct)
    .filter(Boolean)

  const tagCounts = {}
  const categoryCounts = {}
  seeds.forEach((item) => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 2
    item.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  const blocked = new Set([...exclude, ...cartIds])

  return products
    .filter((item) => !blocked.has(item.id))
    .map((item) => {
      let score = item.rating * 0.4
      if (item.badge === 'Editor pick' || item.badge === 'Smart pick') score += 1.5
      if (item.compareAt) score += 1
      score += categoryCounts[item.category] || 0
      item.tags.forEach((tag) => {
        score += tagCounts[tag] || 0
      })
      seeds.forEach((seed) => {
        if (seed.pairsWith?.includes(item.id)) score += 4
      })
      return { ...item, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export function assistantReply(message, context) {
  const text = message.trim()
  if (!text) return { copy: 'Tell me what you need — a gift, a desk setup, or a budget — and I will pick a short list.', picks: [] }

  const lower = text.toLowerCase()
  let category = 'all'
  if (/(headphone|speaker|audio|music)/.test(lower)) category = 'audio'
  else if (/(laptop|keyboard|watch|hub|tech|desk setup)/.test(lower)) category = 'tech'
  else if (/(home|lamp|mug|coffee|throw)/.test(lower)) category = 'home'
  else if (/(shoe|bag|tote|sunglass|wear)/.test(lower)) category = 'wear'
  else if (/(calm|journal|skin|plant|wellness|gift)/.test(lower)) category = 'wellness'

  const picks = searchProducts(text, category).slice(0, 3)
  const fallback = recommendProducts({
    viewed: context.viewed,
    cartIds: context.cartIds,
    wishlist: context.wishlist,
    limit: 3,
  })
  const list = picks.length ? picks : fallback
  const reason = picks.length
    ? `I matched “${text}” to ${list.length} piece${list.length === 1 ? '' : 's'} in the catalog.`
    : 'I could not parse a tight filter, so here are personalized picks from what you have been browsing.'

  return { copy: reason, picks: list }
}
