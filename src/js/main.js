/* ============================================
   main.js — shared across all pages
   Manages: cart state, navbar cart counter
   ============================================ */

// Simple in-memory cart (array of { name, price, qty })
const cart = [];

/**
 * Add an item to the cart or increment quantity if already present.
 * @param {string} name
 * @param {number} price
 */
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartUI();
}

/**
 * Update the navbar cart counter badge.
 */
function updateCartUI() {
  const cartBtn = document.getElementById('cart-btn');
  if (!cartBtn) return;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBtn.textContent = `Cart (${total})`;
}