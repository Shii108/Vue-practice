<template>
  <div v-if="product" class="product-container">
    <img :src="product.thumbnail" :alt="product.title" class="product-image" />

    <div class="details">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">Price: ${{ product.price }}</p>

      <div class="quantity">
        Quantity
        <button @click="quantity--" :disabled="quantity <= 1">-</button>
        <span>{{ quantity }}</span>
        <button @click="quantity++">+</button>
      </div>

      <button class="add-to-cart" @click="addToCart(product.title, product.thumbnail, product.price)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "./store/cartStore";

// Store & Route
const cartStore = useCartStore();
const route = useRoute();

// Reactive Variables
const quantity = ref(1);
const products = inject("products");

// Computed Property: Find the product by ID
const product = computed(() => {
  const selectedId = Number(route.params.id);
  return products.value?.find((p) => p.id === selectedId) || null;
});

// Function to Add Product to Cart
const addToCart = (title, thumbnail, price) => {
  cartStore.addToCart(quantity.value, route.params.id, title, thumbnail, price);
  cartStore.totalQuantity();
};
</script>

<style scoped>
.product-container {
  height: 600px;
  width: 1000px;
  border: solid 1px black;
  display: flex;
  margin: auto;
}

.product-image {
  width: 400px;
  height: 400px;
}

.details {
  width: 600px;
  font-size: 2rem;
  border: solid 1px black;
}

.details h2 {
  font-size: 4rem;
  color: orange;
  padding: 20px;
}

.price {
  margin-top: 20px;
  color: green;
}

.add-to-cart {
  color: white;
  padding: 13px;
  margin-top: 10px;
  background-color: #F57224;
  cursor: pointer;
  font-size: 1.5rem;
}

.add-to-cart:hover {
  background-color: #d45b1b;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.quantity {
  margin-top: 10px;
}

.quantity span {
  display: inline-block;
  width: 30px;
  text-align: center;
  background: black;
  color: white;
  padding: 2px 5px;
  border-radius: 4px;
  margin: 0 4px;
}

.quantity button {
  width: 35px;
  height: 28px;
  border: none;
  background: #333;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.quantity button:hover {
  background: #555;
}
</style>
