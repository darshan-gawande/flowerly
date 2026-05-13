import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalQty } = useCart()
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="logo">F<em>lower</em>ly</div>
      <ul className="nav-links">
        <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/catalog" className={pathname === '/catalog' ? 'active' : ''}>Collections</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#" className="nav-cta">Cart ({totalQty})</a></li>
      </ul>
    </nav>
  )
}
