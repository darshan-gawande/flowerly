import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">F<em>lower</em>ly</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">Fresh. Curated. Delivered.</p>
        <h1>Flowers that <em>speak</em> for you</h1>
        <p className="hero-sub">Handpicked blooms for every occasion, delivered to your door.</p>
        <button className="hero-btn">Shop Collections</button>
      </div>
    </section>
  )
}

const featured = [
  { emoji: '🌹', name: 'Juliet Garden Rose', price: '₹480', tag: 'Classic' },
  { emoji: '🌸', name: 'Sakura Blossom', price: '₹320', tag: 'Seasonal' },
  { emoji: '🌻', name: 'Sunflower', price: '₹210', tag: 'Seasonal' },
]

function FeaturedFlowers() {
  return (
    <section className="featured">
      <h2>Featured <em>Blooms</em></h2>
      <div className="flower-cards">
        {featured.map((flower) => (
          <div className="flower-card" key={flower.name}>
            <div className="flower-emoji">{flower.emoji}</div>
            <span className="flower-tag">{flower.tag}</span>
            <div className="flower-name">{flower.name}</div>
            <div className="flower-price">{flower.price} <span>per stem</span></div>
            <button className="add-btn">Add to cart →</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedFlowers />
    </>
  )
}

export default App
