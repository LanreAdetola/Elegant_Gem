<template>
    <div class="products">
      <div class="product-list">
        <div class="product-card" v-for="product in products" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p><strong>Price:</strong> {{ formatPrice(product.price) }} XAF</p>
  
          <!-- Quantity selector -->
          <div class="quantity-selector">
            <button @click="decreaseQuantity(product)">-</button>
            <input type="number" v-model="product.quantity" min="1" />
            <button @click="increaseQuantity(product)">+</button>
          </div>
  
          <!-- Add to Cart Button -->
          <button @click="addToCart(product)">{{ $t('addToCart') }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Products",
    props: {
      cart: Array,  // Cart passed from parent (App.vue)
      updateCart: Function,  // Function to update the cart
    },
    data() {
      return {
        // Products list with quantity initialized to 1
        products: [
          { id: 1, name: "Gold Necklace", description: "A beautiful gold necklace.", price: 5000, quantity: 1 },
          { id: 2, name: "Diamond Ring", description: "A stunning diamond ring.", price: 3500, quantity: 1 },
          { id: 3, name: "Silver Bracelet", description: "A shiny silver bracelet.", price: 3500, quantity: 1 },
        ],
      };
    },
    methods: {
      // Method to increase quantity
      increaseQuantity(product) {
        product.quantity += 1;
      },
      // Method to decrease quantity
      decreaseQuantity(product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
      },
      // Add to Cart method
      addToCart(product) {
        this.updateCart(product);  // Calls parent function to update the cart
      },
      // Format price with two decimal places
      formatPrice(price) {
        return price.toFixed(2);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles for product display */
  .product-list {
    display: grid;
    grid-template-columns: 1fr; /* 1 column to display one product per line */
    gap: 20px;
  }
  
  .product-card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center; /* Center the text inside each product card */
  }
  
  button {
    padding: 10px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #369d73;
  }
  
  /* Quantity selector styling */
  .quantity-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  
  .quantity-selector button {
    padding: 5px 10px;
    background-color: #42b883;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .quantity-selector input {
    width: 50px;
    text-align: center;
    font-size: 16px;
    margin: 0 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .quantity-selector button:hover {
    background-color: #369d73;
  }
  </style>
  