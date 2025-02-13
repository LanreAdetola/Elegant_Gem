<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter for navigation
import Products from './views/Products.vue'; // Import Products component
import Cart from './components/Cart.vue'; // Import Cart component
import WelcomeScreen from './components/WelcomeScreen.vue';
import NavBar from './components/NavBar.vue';
import { useI18n } from 'vue-i18n';

// State to track if user has chosen preferences
const preferencesChosen = ref(false);

// Track selected language
const { locale } = useI18n(); // Get the locale function from vue-i18n

// Handle preferences from WelcomeScreen component
function handlePreferences(selectedLanguage) {
  locale.value = selectedLanguage; // Update the language in vue-i18n
  preferencesChosen.value = true; // Show the main app content
}

// State to track cart items
const cart = ref([]);

// Function to update the cart (add items)
function updateCart(product) {
  const existingProduct = cart.value.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase quantity if product already in cart
  } else {
    cart.value.push({ ...product, quantity: 1 }); // Add new product to cart
  }
}

// Calculate the total price of items in the cart
function calculateTotal() {
  return cart.value.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
}

// Use the Vue Router to navigate to the cart page
const router = useRouter();
function goToCart() {
  router.push('/cart'); // Corrected navigation using `router.push`
}
</script>

<template>
  <div id="app">
    <!-- Show Welcome Screen if preferences are not chosen -->
    <WelcomeScreen v-if="!preferencesChosen" @preferencesChosen="handlePreferences" />
    
    <!-- Main App Content -->
    <div v-else>
      <NavBar /> <!-- Add NavBar component -->

      <h1>The Elegant Gem</h1> <!-- Store Name -->

      <div class="logo-placeholder">[Logo Placeholder]</div>

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
  padding-bottom: 80px; /* Add bottom padding to make space for sticky footer */
  border: 2px solid black; /* Add black border around the app */
  border-radius: 8px; /* Optional: rounded corners */
  position: relative; /* Allow sticky footer to be relative to the container */
  min-height: 100vh; /* Ensure the app takes the full height of the viewport */
  box-sizing: border-box; /* Include padding and border in the total size */
}

/* Sticky Footer Styles */
.sticky-footer {
  position: absolute; /* Position relative to the container */
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #42b883;
  color: white;
  text-align: center;
  padding: 1em;
  z-index: 1000;
  border-top: 2px solid #000; /* Border between footer and content */
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
</style>
