<template>
    <nav>
      <router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/products">{{ $t('products') }}</router-link>
      <router-link to="/cart">{{ $t('cart') }}</router-link>
  
      <!-- Add the Language Switcher as a dropdown -->
      <LanguageSwitcher />
    </nav>
  </template>
  
  <script setup>
  import LanguageSwitcher from './LanguageSwitcher.vue'; // Import the language switcher component
  </script>
  
  <style scoped>
  nav {
    padding: 1em;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
  }
  
  router-link {
    text-decoration: none;
    color: #646cff;
    font-weight: bold;
  }
  
  router-link:hover {
    color: #42b883;
  }
  </style>
  