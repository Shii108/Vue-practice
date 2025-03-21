<template>
   <div v-if="product" class="product-container">
    <img :src="product.thumbnail" :alt="product.title" class="product-image" />
    <div class="details">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const products = inject("products");

const selectedId=Number(route.params.id)

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

.details
{
  width: 600px;
  font-size: 2rem;
  border: solid 1px black;
}

.details h2{
  font-size: 4rem;
  color: orange;
  padding: 20px;
}

.price 
{
  margin-top: 20px;
  color: green;
}
</style> 


