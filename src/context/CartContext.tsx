import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface CartItem {
  name: string
  price: number
  qty: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (name: string, price: number) => void
  removeFromCart: (name: string) => void
  incrementQty: (name: string) => void
  decrementQty: (name: string) => void
  isInCart: (name: string) => boolean
  totalQty: number
  totalPrice: number
  cartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(name: string, price: number) {
    setCart(prev => {
      const existing = prev.find(i => i.name === name)
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { name, price, qty: 1 }]
    })
  }

  function removeFromCart(name: string) {
    setCart(prev => prev.filter(i => i.name !== name))
  }

  function incrementQty(name: string) {
    setCart(prev => prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i))
  }

  function decrementQty(name: string) {
    setCart(prev => {
      const item = prev.find(i => i.name === name)
      if (!item) return prev
      if (item.qty === 1) return prev.filter(i => i.name !== name)
      return prev.map(i => i.name === name ? { ...i, qty: i.qty - 1 } : i)
    })
  }

  function isInCart(name: string) {
    return cart.some(i => i.name === name)
  }

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, incrementQty, decrementQty,
      isInCart, totalQty, totalPrice,
      cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
