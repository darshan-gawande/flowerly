import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const collections = [
  { id: 1, emoji: '🌹', bgClass: 'c1', label: 'Classic', count: 3, desc: 'Timeless and romantic', filter: 'classic' },
  { id: 2, emoji: '🌺', bgClass: 'c2', label: 'Exotic & Rare', count: 3, desc: 'Bold and extraordinary', filter: 'exotic' },
  { id: 3, emoji: '🌻', bgClass: 'c3', label: 'Seasonal', count: 3, desc: 'Fresh from the season', filter: 'seasonal' },
  { id: 4, emoji: '🌏', bgClass: 'c4', label: 'Global Mix', count: 3, desc: 'Sourced worldwide', filter: 'global' },
]

const whyCards = [
  { icon: '🚚', title: 'Same-Day Delivery', desc: 'Order before 2 PM and your blooms arrive the same evening — fresh from our cold-chain network.' },
  { icon: '✂️', title: 'Hand-Picked Quality', desc: 'Every stem is inspected by our florists before dispatch. No wilted petals, ever.' },
  { icon: '🌱', title: 'Sustainably Sourced', desc: 'We partner with farms certified for ethical growing practices and fair wages.' },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Freshly curated, daily</div>
          <h1>Flowers that <em>speak</em> for you</h1>
          <p className="hero-sub">Handpicked blooms for every occasion, delivered to your door with care and elegance.</p>
          <div className="hero-actions">
            <Link to="/catalog" className="btn-primary">Shop Collections</Link>
            <a href="#why" className="btn-secondary">Why Flowerly →</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">12+</div>
              <div className="stat-label">Curated blooms</div>
            </div>
            <div>
              <div className="stat-num">4</div>
              <div className="stat-label">Collections</div>
            </div>
            <div>
              <div className="stat-num">8</div>
              <div className="stat-label">Countries sourced</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="flower-canvas">
            <div className="flower-card main">
              <div className="flower-emoji-bg main">🌹</div>
              <div className="flower-card-info">
                <h3>Juliet Garden Rose</h3>
                <p className="price">₹480 <span>per stem</span></p>
              </div>
            </div>
            <div className="flower-card side1">
              <div className="flower-emoji-bg s1">🌸</div>
              <div className="flower-card-info">
                <h3>Sakura</h3>
                <p className="price">₹620</p>
              </div>
            </div>
            <div className="flower-card side2">
              <div className="flower-emoji-bg s2">🪷</div>
              <div className="flower-card-info">
                <h3>Bird of Paradise</h3>
                <p className="price">₹750</p>
              </div>
            </div>
            <div className="float-badge b1"><span className="badge-dot"></span> 500+ happy customers</div>
            <div className="float-badge b2">🌿 Sustainably grown</div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        <div className="section-header">
          <div className="section-tag">Browse by type</div>
          <h2 className="section-title">Find your <em>perfect</em> bloom</h2>
        </div>
        <div className="collection-grid">
          {collections.map(col => (
            <Link to={`/catalog?filter=${col.filter}`} className="collection-card" key={col.id}>
              <div className={`collection-bg ${col.bgClass}`}>
                <span>{col.emoji}</span>
                <span className="collection-count">{col.count} flowers</span>
              </div>
              <div className="collection-info">
                <h3>{col.label}</h3>
                <p>{col.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY FLOWERLY */}
      <section className="why" id="why">
        <div className="section-header">
          <div className="section-tag">Why us</div>
          <h2 className="section-title">The Flowerly <em>promise</em></h2>
        </div>
        <div className="why-grid">
          {whyCards.map(card => (
            <div className="why-card" key={card.title}>
              <span className="why-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
