import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { flowers } from '../data/flowers'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FlowerDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, isInCart, openCart } = useCart()
  const [qty, setQty] = useState(1)

  const flower = flowers.find(f => f.id === Number(id))
  if (!flower) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p>Flower not found.</p>
      <Link to="/catalog">← Back to catalog</Link>
    </div>
  )

  const added = isInCart(flower.name)
  const flowerName = flower.name
  const flowerPrice = flower.price

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addToCart(flowerName, flowerPrice)
    openCart()
  }

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <button className="detail-back" onClick={() => navigate(-1)}>← Back</button>

        <div className="detail-card">
          <div className={`detail-emoji-box ${flower.colorClass}`}>
            {flower.emoji}
          </div>

          <div className="detail-info">
            <div className="detail-meta">
              <span className={`flower-tag ${flower.tagClass}`}>{flower.tag}</span>
              <span className="flower-origin">{flower.origin}</span>
            </div>

            <h1 className="detail-name">{flower.name}</h1>
            <p className="detail-desc">{flower.desc}</p>

            <div className="detail-origin-story">
              <h3>Origin Story</h3>
              <p>Sourced from {flower.origin.split(' ').slice(1).join(' ')}, this bloom travels thousands of miles through our cold-chain network to arrive fresh at your door within 24 hours of harvest.</p>
            </div>

            <div className="detail-price-row">
              <div className="detail-price">
                ₹{flower.price}
                <span>{flower.unit}</span>
              </div>
            </div>

            <div className="detail-actions">
              <div className="qty-selector">
                <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span className="qty-value">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <button
                className={`add-btn detail-add-btn${added ? ' btn-added' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? 'Added ✓ — Add more' : 'Add to cart →'}
              </button>
            </div>

            <div className="detail-total">
              Total: <strong>₹{flower.price * qty}</strong>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
