<!-- <template>
  <div class="products">
    <div v-if="showModal" class="overlay"></div>
    <TestP :product="selectedProduct" :show-modal="showModal" @close-modal="closeModal" />
    <ul>
      <li v-for="(product, index) in electronics" :key="product.id">
        <div class="item" @click="testing(index)">
          <img :src="product.thumbnail" :alt="product.title" class="product-img" />
          <h3>{{ product.title }}</h3>
          <p>Price: ${{ product.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ProductDetail from './ProductDetail.vue';
import { inject, reactive, ref } from 'vue';
import TestP from './testP.vue';

const showModal = ref(false)

const electronics = inject('electronicsProducts');
const selectedProduct = ref(null)

const testing = (index) => {
  selectedProduct.value = electronics.value[index]
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
}
</script>

<style>
.overlay {
  background: rgba(0,0,0);
  opacity: 0.7;
  filter: blur(10px);
  width: 100%;
  height: 100vh;
  position: absolute;
}

.products{
  overflow-y: hidden;
}
</style> -->



<template>
  <div class="products">
    <ul>
      <li v-for="(product) in Electronics" :key="product.id">
        <div class="item" @click="goToProduct(product.id)">
          <img :src="product.thumbnail" :alt="product.title" class="product-img" />
          <h3>{{ product.title }}</h3>
          <p>Price: ${{ product.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router"; 

const router = useRouter(); // Get router instance
const Electronics = inject("electronicsProducts");

const goToProduct = (id) => {
  router.push(`/electronics/${id}`);
};

</script>

