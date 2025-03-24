<template>
  <div v-if="product" class="product-container">
    <img :src="product.thumbnail" :alt="product.title" class="product-image" />
    <div class="details">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">Price: ${{ product.price }}</p>
      <div class="quantity">
        Quantity
        <button @click="Quantity--" :disabled="Quantity <= 1">-</button>
        <span>{{ Quantity }}</span>
        <button @click="Quantity++">+</button>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from "vue";
import { useRoute } from "vue-router";

let Quantity = ref(1)

const route = useRoute();

const products = inject("products");

const selectedId = Number(route.params.id)

console.log(selectedId);

const product = computed(() => {
  const selectedId = Number(route.params.id);
  return products.value?.find((p) => p.id === selectedId) || null;
});

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
  padding: 5px;
  margin-top: 10px;
  background-color: #F57224;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5; 
}
.quantity span {
  display: inline-block; 
  width: 30px; 
  text-align: center;
  background: black;
  color: white;
  padding: 2px 5px;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;
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
}



</style>
