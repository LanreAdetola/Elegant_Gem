<template>
    <div class="cart">
      <h2>Your Cart</h2>
      <div v-if="cart.length === 0">Your cart is empty.</div>
      <div v-else>
        <div class="cart-item" v-for="(item, index) in cart" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ formatPrice(item.price) }} XAF</p>
          <button @click="removeFromCart(index)">Remove</button>
        </div>
        <div class="total">
          <h3>Total: {{ calculateTotal() }} XAF</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: Array,  // Cart passed from parent (App.vue)
      updateCart: Function,  // Function to update the cart
    },
    methods: {
      formatPrice(price) {
        return price.toFixed(2);
      },
      calculateTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);  // Remove item from cart
      },
    },
  };
  </script>
  
  <style scoped>
  .cart {
    padding: 1em;
    background-color: #f9f9f9;
  }
  
  .cart-item {
    border-bottom: 1px solid #ccc;
    padding: 1em 0;
  }
  
  button {
    padding: 8px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c0392b;
  }
  
  .total {
    margin-top: 1em;
    font-size: 1.2em;
    font-weight: bold;
  }
  </style>
  