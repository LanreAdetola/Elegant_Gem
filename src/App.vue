<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // For navigation
import Products from './views/Products.vue'; // Import Products component
import WelcomeScreen from './components/WelcomeScreen.vue'; // Import WelcomeScreen
import NavBar from './components/NavBar.vue'; // Import NavBar
import { useI18n } from 'vue-i18n';

// State to track if user has chosen preferences
const preferencesChosen = ref(false);

// Track selected language
const { locale } = useI18n(); // Get locale from vue-i18n

// Handle preferences from WelcomeScreen
function handlePreferences(selectedLanguage) {
  locale.value = selectedLanguage; // Update language
  preferencesChosen.value = true; // Move to main app content
}

// State to track cart items
const cart = ref([]);

// Function to update the cart (add items)
function updateCart(product) {
  const existingProduct = cart.value.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase quantity
  } else {
    cart.value.push({ ...product, quantity: 1 }); // Add new product to cart
  }
}

// Calculate total price of items in the cart
function calculateTotal() {
  return cart.value.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
}

// Navigate to cart page
const router = useRouter();
function goToCart() {
  router.push('/cart'); // Navigate to cart page
}
</script>

<template>
  <div id="app">
    <!-- Show Welcome Screen if preferences not chosen -->
    <WelcomeScreen v-if="!preferencesChosen" @preferencesChosen="handlePreferences" />
    
    <!-- Main App Content -->
    <div v-else>
      <NavBar /> <!-- Navigation bar -->

      <h1>The Elegant Gem</h1> <!-- Store Name -->
      <div class="logo-placeholder">[Logo Placeholder]</div> <!-- Placeholder for logo -->

      <!-- Product List -->
      <Products :cart="cart" :updateCart="updateCart" />
    </div>

    <!-- Sticky Footer Cart Summary -->
    <div v-if="cart.length" class="sticky-footer">
      <div class="cart-summary">
        <span>{{ cart.length }} items</span>
        <span>{{ calculateTotal() }} XAF</span>
        <button @click="goToCart">View Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* General App Styles */
#app {
  padding: 2em;
  padding-bottom: 80px; /* Space for sticky footer */
  border: 2px solid black;
  border-radius: 8px;
  position: relative;
  min-height: 100vh; /* Full height of the viewport */
  height: 100%; /* Ensure it takes up the full screen height */
  box-sizing: border-box;
  max-width: 100%;
  margin: 0 auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  background: #f4f4f4; /* Set a background color */
}

/* Header Styles (Store Name) */
h1 {
  font-size: 2em;
  text-align: center; /* Center the store name */
  margin-bottom: 1em;
}

/* Sticky Footer Styles */
.sticky-footer {
  position: fixed; /* Make footer fixed at the bottom */
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #42b883;
  color: white;
  text-align: center;
  padding: 1em;
  z-index: 1000;
  border-top: 2px solid #000;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-summary button {
  background-color: #e74c3c;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.cart-summary span {
  font-size: 1.2em;
}

/* Mobile Styles for iPhone and similar devices */
@media (max-width: 390px) {
  #app {
    padding: 1em;
    font-size: 0.9em; /* Slightly smaller font */
  }

  h1 {
    font-size: 1.5em; /* Reduce store name size */
  }

  .sticky-footer {
    padding: 0.8em;
  }

  .cart-summary button {
    padding: 6px 12px; /* Smaller button */
  }
}

/* For tablets (up to 768px width) */
@media (max-width: 768px) {
  h1 {
    font-size: 1.8em;
  }
}
</style>
