<template>
  <nav>
    <router-link to="/" active-class="active-link">{{ $t('home') }}</router-link>
    <router-link to="/products" active-class="active-link">{{ $t('products') }}</router-link>
    <router-link to="/cart" active-class="active-link">{{ $t('cart') }}</router-link>

    <!-- Add the Language Switcher as a dropdown -->
    <LanguageSwitcher />
  </nav>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'; // Import the language switcher component
</script>

<style scoped>
/* Navigation bar container */
nav {
  padding: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black; /* Optional background color */
  border-radius: 8px; /* Rounded edges for better styling */
}

/* Links inside the navigation bar */
nav a {
  text-decoration: none;
  color: gray;
  font-weight: bold;
}

/* Hover effect for better user experience */
nav a:hover {
  color: gray;
}

/* Active link styling to indicate the current page */
.active-link {
  color: goldenrod;
  text-decoration: underline;
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  nav {
    flex-direction: column; /* Stack items for small screens */
    padding: 0.5em;
  }
}
</style>
