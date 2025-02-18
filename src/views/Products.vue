<template>
  <div class="products">
    <!-- Category filter buttons -->
    <div class="category-filter">
      <button @click="filterCategory('rings')">Rings</button>
      <button @click="filterCategory('chains')">Chains</button>
      <button @click="filterCategory('bracelets')">Bracelets</button>
      <button @click="filterCategory('')">All</button> <!-- Show all products -->
    </div>

    <!-- Product list -->
    <div class="product-list">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
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
    cart: Array, // Cart passed from parent (App.vue)
    updateCart: Function, // Function to update the cart
  },
  data() {
    return {
      // Products list with categories added
      products: [
        { id: 1, name: "Gold Necklace", description: "A beautiful gold necklace.", price: 5000, quantity: 1, category: 'chains' },
        { id: 2, name: "Diamond Ring", description: "A stunning diamond ring.", price: 3500, quantity: 1, category: 'rings' },
        { id: 3, name: "Silver Bracelet", description: "A shiny silver bracelet.", price: 3500, quantity: 1, category: 'bracelets' },
        { id: 4, name: "Gold Ring", description: "A shiny gold ring.", price: 4000, quantity: 1, category: 'rings' },
        { id: 5, name: "Silver Chain", description: "A beautiful silver chain.", price: 3000, quantity: 1, category: 'chains' },
      ],
      selectedCategory: '', // State to track selected category for filtering
    };
  },
  computed: {
    // Filter products based on the selected category
    filteredProducts() {
      if (this.selectedCategory) {
        return this.products.filter(product => product.category === this.selectedCategory);
      }
      return this.products; // Return all products if no category is selected
    },
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
      this.updateCart(product); // Calls parent function to update the cart
    },
    // Format price with two decimal places
    formatPrice(price) {
      return price.toFixed(2);
    },
    // Method to filter products based on category
    filterCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

/* Styles for category filter buttons */

<style scoped>

.category-filter button {
  padding: 12px 24px;
  background-color: goldenrod; /* Gold button color */
  color: black; /* Black text for better contrast */
  border: 2px solid transparent;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 25px; /* More rounded corners for a sleek look */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase; /* Make text uppercase for a clean, bold look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 10px; /* Add space above the category filter */

}

/* Hover effect: Smooth color transition and slight scaling */
.category-filter button:hover {
  background-color: #333; /* Dark grey for hover */
  color: white; /* White text on hover for contrast */
  transform: translateY(-2px); /* Subtle lift effect */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
}

/* Active state for when the button is clicked */
.category-filter button:active {
  transform: translateY(0); /* Remove the lift effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Normal shadow when clicked */
}


/* Styles for product display */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 2 or more columns depending on screen size */
  gap: 20px;
  margin-top: 10px; /* Add space above the category filter */

}

.product-card {
  background-color: #f9f9f994; /* Lighter grey for product cards */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center the text inside each product card */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 3px;
}

/* Product card hover effect */
.product-card:hover {
  transform: translateY(-4px); /* Slight lift effect on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Darker shadow on hover */
}

button {
  padding: 10px;
  background-color: black; /* Black button background */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: grey; /* Grey button hover color */
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
  background-color: black; /* Black background for quantity buttons */
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.quantity-selector button:hover {
  background-color: grey; /* Grey on hover for quantity buttons */
}

.quantity-selector input {
  width: 50px;
  text-align: center;
  font-size: 16px;
  margin: 0 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc; /* Light grey border for input */
  transition: border-color 0.3s ease;
}

/* Input focus effect */
.quantity-selector input:focus {
  border-color: goldenrod; /* Goldenrod border when input is focused */
}

</style>