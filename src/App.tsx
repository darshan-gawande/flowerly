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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
