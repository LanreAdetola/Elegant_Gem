<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "No description available",
  },
});
</script>

<template>
  <div class="product-card">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">Price: ${{ price.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1em;
  margin: 1em 0;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.product-card h2 {
  margin: 0 0 0.5em;
}

.product-card .price {
  color: #42b883;
  font-weight: bold;
  margin-top: 1em;
}
</style>
