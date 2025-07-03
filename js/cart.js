// Cart Management System
class CartManager {
  constructor() {
    this.cart = this.loadCart();
    // Delay UI update to ensure DOM is ready
    setTimeout(() => {
      this.updateCartUI();
    }, 0);
  }

  // Load cart from localStorage
  loadCart() {
    const saved = localStorage.getItem('somarthok-cart');
    return saved ? JSON.parse(saved) : [];
  }

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem('somarthok-cart', JSON.stringify(this.cart));
  }

  // Add product to cart
  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1
      });
    }
    
    this.saveCart();
    this.updateCartUI();
    this.showSuccessToast(`${product.name} added to cart!`);
  }

  // Remove product from cart
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  // Update quantity
  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartUI();
      }
    }
  }

  // Get cart total
  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Get cart item count
  getItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  // Update cart UI
  updateCartUI() {
    this.updateCartBadge();
    this.updateCartSidebar();
  }

  // Update cart badge
  updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    
    if (!badge) return;
    
    const count = this.getItemCount();
    
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }

  // Update cart sidebar
  updateCartSidebar() {
    const emptyCart = document.getElementById('empty-cart');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotal = document.getElementById('cart-total');

    // Add null checks for all elements
    if (!emptyCart || !cartItemsList || !cartFooter || !cartTotal) {
      return;
    }

    if (this.cart.length === 0) {
      // Show empty cart message, hide items list and footer
      emptyCart.style.display = 'block';
      cartItemsList.style.display = 'none';
      cartFooter.style.display = 'none';
    } else {
      // Hide empty cart message, show items list and footer
      emptyCart.style.display = 'none';
      cartItemsList.style.display = 'block';
      cartFooter.style.display = 'block';
      
      // Populate cart items
      const cartHTML = this.cart.map(item => `
        <div class="flex items-center gap-4 p-4 border-b border-gray-100">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800">${item.name}</h4>
            <p class="text-eco1 font-bold">৳${item.price}</p>
          </div>
          <div class="flex items-center gap-2">
            <button data-action="decrease" data-product-id="${item.id}" data-quantity="${item.quantity - 1}" 
                    class="cart-quantity-btn w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
              <i class="fa-solid fa-minus text-sm"></i>
            </button>
            <span class="w-8 text-center font-semibold">${item.quantity}</span>
            <button data-action="increase" data-product-id="${item.id}" data-quantity="${item.quantity + 1}" 
                    class="cart-quantity-btn w-8 h-8 rounded-full bg-eco1 hover:bg-eco3 text-white flex items-center justify-center transition">
              <i class="fa-solid fa-plus text-sm"></i>
            </button>
          </div>
          <button data-action="remove" data-product-id="${item.id}" 
                  class="cart-remove-btn text-red-500 hover:text-red-700 transition ml-2">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `).join('');
      
      // Additional null check before setting innerHTML
      if (cartItemsList) {
        cartItemsList.innerHTML = cartHTML;
        
        // Attach event listeners to cart buttons
        this.attachCartEventListeners();
      }
      
      // Add explicit null check for cartTotal before setting textContent
      if (cartTotal) {
        cartTotal.textContent = `৳${this.getTotal()}`;
      }
    }
  }

  // Attach event listeners to cart buttons
  attachCartEventListeners() {
    // Quantity buttons
    document.querySelectorAll('.cart-quantity-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.currentTarget.dataset.productId;
        const quantity = parseInt(e.currentTarget.dataset.quantity);
        this.updateQuantity(productId, quantity);
      });
    });

    // Remove buttons
    document.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.currentTarget.dataset.productId;
        this.removeFromCart(productId);
      });
    });
  }

  // Show success toast
  showSuccessToast(message) {
    const toast = document.getElementById('success-toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.remove('translate-x-full');
    
    setTimeout(() => {
      toast.classList.add('translate-x-full');
    }, 3000);
  }

  // Clear cart
  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartUI();
  }

  // Checkout function
  checkout() {
    if (this.cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const total = this.getTotal();
    const itemCount = this.getItemCount();
    
    // Simple checkout simulation
    const confirmed = confirm(`Proceed with checkout?\n\nTotal: ৳${total}\nItems: ${itemCount}\n\nThis will redirect you to our payment partner.`);
    
    if (confirmed) {
      // In a real application, this would redirect to a payment gateway
      alert('Thank you for your order! You will be redirected to our payment partner.\n\nFor now, this is a demo - your cart will be cleared.');
      this.clearCart();
      closeCart();
    }
  }
}

// Global cart manager variable
let cartManager;

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart manager
  cartManager = new CartManager();
  
  // Attach checkout button event listener
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartManager) {
        cartManager.checkout();
      }
    });
  }
});

// Global functions that can be called from HTML onclick attributes
function openCart() {
  const cartOverlay = document.getElementById('cart-overlay');
  const cartSidebar = document.getElementById('cart-sidebar');
  
  if (cartOverlay && cartSidebar) {
    cartOverlay.style.display = 'block';
    cartSidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const cartOverlay = document.getElementById('cart-overlay');
  const cartSidebar = document.getElementById('cart-sidebar');
  
  if (cartOverlay && cartSidebar) {
    cartOverlay.style.display = 'none';
    cartSidebar.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

// Event listeners for cart interactions
document.addEventListener('DOMContentLoaded', function() {
  // Close cart when clicking outside
  document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartButton = event.target.closest('[onclick*="openCart"]');
    
    if (cartSidebar && !cartSidebar.contains(event.target) && !cartButton && cartSidebar.classList.contains('open')) {
      closeCart();
    }
  });

  // Close cart with Escape key
  document.addEventListener('keydown', function(event) {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (event.key === 'Escape' && cartSidebar && cartSidebar.classList.contains('open')) {
      closeCart();
    }
  });
});