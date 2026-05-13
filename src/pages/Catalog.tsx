import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { flowers } from '../data/flowers'
import { useCart } from '../context/CartContext'
import type { Category } from '../data/flowers'

type Filter = 'all' | Category

const filters: { label: string; value: Filter }[] = [
  { label: '✦ All Flowers', value: 'all' },
  { label: '🌹 Classic', value: 'classic' },
  { label: '🌿 Exotic & Rare', value: 'exotic' },
  { label: '🌻 Seasonal', value: 'seasonal' },
  { label: '🌏 Global Mix', value: 'global' },
]

export default function Catalog() {
  const [searchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const { addToCart, removeFromCart, isInCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const param = searchParams.get('filter') as Filter | null
    if (param && filters.some(f => f.value === param)) setActiveFilter(param)
  }, [searchParams])

  const visible = activeFilter === 'all' ? flowers : flowers.filter(f => f.category === activeFilter)

  return (
    <>
      <Navbar />

      <div className="page-header">
        <div className="page-header-left">
          <div className="eyebrow">Our catalog</div>
          <h1>Every bloom, <em>curated</em></h1>
        </div>
        <div className="result-count">Showing {visible.length} flower{visible.length !== 1 ? 's' : ''}</div>
      </div>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="catalog">
        {visible.map(flower => {
          const added = isInCart(flower.name)
          return (
            <div
              className="flower-row"
              key={flower.id}
              onClick={() => navigate(`/flower/${flower.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={`flower-emoji-box ${flower.colorClass}`}>{flower.emoji}</div>
              <div className="flower-body">
                <div className="flower-meta">
                  <span className={`flower-tag ${flower.tagClass}`}>{flower.tag}</span>
                  <span className="flower-origin">{flower.origin}</span>
                </div>
                <div className="flower-name">{flower.name}</div>
                <div className="flower-desc">{flower.desc}</div>
              </div>
              <div className="flower-right">
                <div className="flower-price">₹{flower.price}<span>{flower.unit}</span></div>
                <button
                  className={`add-btn${added ? ' btn-added' : ''}`}
                  onClick={e => {
                    e.stopPropagation()
                    added ? removeFromCart(flower.name) : addToCart(flower.name, flower.price)
                  }}
                >
                  {added ? 'Added ✓' : 'Add to cart →'}
                </button>
              </div>
            </div>
          )
        })}

        {visible.length === 0 && (
          <div className="empty-state" style={{ display: 'block' }}>
            <div className="empty-emoji">🌱</div>
            <p>No flowers found in this collection yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}
