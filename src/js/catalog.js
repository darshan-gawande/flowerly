/* ============================================
   catalog.js — catalog page only
   Manages: collection filtering, add-to-cart
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- FILTER ---- */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const flowerRows  = document.querySelectorAll('.flower-row');
  const resultCount = document.getElementById('result-count');
  const emptyState  = document.getElementById('empty-state');

  // Check if a filter was passed via URL query param (?filter=exotic)
  const urlParams     = new URLSearchParams(window.location.search);
  const defaultFilter = urlParams.get('filter') || 'all';
  applyFilter(defaultFilter);

  // Highlight the matching button on page load
  filterBtns.forEach(btn => {
    if (btn.dataset.filter === defaultFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Click handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  /**
   * Show/hide rows based on selected filter.
   * @param {string} filter - 'all' | 'classic' | 'exotic' | 'seasonal' | 'global'
   */
  function applyFilter(filter) {
    let visible = 0;
    flowerRows.forEach(row => {
      const show = filter === 'all' || row.dataset.category === filter;
      row.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    resultCount.textContent = `Showing ${visible} flower${visible !== 1 ? 's' : ''}`;
    emptyState.style.display = visible === 0 ? 'block' : 'none';
  }

  /* ---- ADD TO CART ---- */
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation(); // prevent row click from triggering

      const name  = btn.dataset.name;
      const price = parseInt(btn.dataset.price, 10);

      addToCart(name, price); // defined in main.js

      // Visual feedback
      const original = btn.textContent;
      btn.textContent     = 'Added ✓';
      btn.style.background = 'var(--green)';

      setTimeout(() => {
        btn.textContent     = original;
        btn.style.background = '';
      }, 1500);
    });
  });

});