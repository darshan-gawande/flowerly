import { useCart } from '../context/CartContext'

export default function CartSidebar() {
  const { cart, cartOpen, closeCart, incrementQty, decrementQty, removeFromCart, totalPrice } = useCart()

  return (
    <>
      {cartOpen && <div className="cart-overlay" onClick={closeCart} />}
      <div className={`cart-sidebar${cartOpen ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={closeCart}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🌱</div>
            <p>Your cart is empty.</p>
            <span>Start exploring our collections!</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.name}>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">₹{item.price} per stem</div>
                  </div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => decrementQty(item.name)}>−</button>
                    <span className="qty-value">{item.qty}</span>
                    <button className="qty-btn" onClick={() => incrementQty(item.name)}>+</button>
                    <button className="cart-remove" onClick={() => removeFromCart(item.name)}>🗑</button>
                  </div>
                  <div className="cart-item-subtotal">₹{item.price * item.qty}</div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout →</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
