<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>Welcome to The Elegant Gem!</h1>
      <p>Your one-stop shop for stunning jewelry.</p>
      <router-link to="/products">Browse Products</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2em;
    color: #333;
  }
  
  p {
    font-size: 1.2em;
    color: #777;
  }
  
  router-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #42b883;
    color: white;
    text-decoration: none;
    border-radius: 8px;
  }
  
  router-link:hover {
    background-color: #369d73;
  }
  </style>
  