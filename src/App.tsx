import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartSidebar from './components/CartSidebar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import FlowerDetail from './pages/FlowerDetail'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/flower/:id" element={<FlowerDetail />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
