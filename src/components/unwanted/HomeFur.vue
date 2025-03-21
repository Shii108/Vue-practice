<template>
  <div class="products">
  <ul>
    <li v-for="product in fur" :key="product.id">
      <div class="item">
      <img :src="product.thumbnail" :alt="product.title" class="product-img" />
      <h3>{{ product.title }}</h3>
      <p>Price: ${{ product.price }}</p>
    </div>
    </li>
  </ul>
</div>
</template>

<script setup>
import { inject } from 'vue';
const fur = inject('homeFurProducts'); // Updated key
</script>