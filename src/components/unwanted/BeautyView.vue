<template>
  <div class="products-grid">
    <div v-for="product in beautyProducts" :key="product.id" class="product-card">
      <div class="image-container">
        <img :src="product.thumbnail" :alt="product.title" class="product-image">
      </div>
      <h3>{{ product.title }}</h3>
      <p>${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const beautyProducts = inject('beautyProducts')
</script>

<style scoped>
</style>
