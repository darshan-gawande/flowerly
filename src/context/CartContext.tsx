import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface CartItem {
  name: string
  price: number
  qty: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (name: string, price: number) => void
  removeFromCart: (name: string) => void
  isInCart: (name: string) => boolean
  totalQty: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

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

  function isInCart(name: string) {
    return cart.some(i => i.name === name)
  }

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, totalQty }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
