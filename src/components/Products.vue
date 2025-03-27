<template>
  <div>
    <div class="products" v-if="isValid">
      <ul>
        <li v-for="product in selectedProductList" :key="product.id">
          <div class="item" @click="goToProduct(product.id, selectedTab)">
            <img :src="product.thumbnail" :alt="product.title" class="product-img" />
            <h3>{{ product.title }}</h3>
            <p>Price: ${{ product.price }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div v-else class="product-not-found">
      <img src="/assets/page-not-found.png" alt="pagenotfound" width="500px" height="500px">
    </div>
  </div>
</template>

<script setup>
import { ref, watch, inject, watchEffect, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// Vue Router
const router = useRouter();
const route = useRoute();

// Reactive Variables
const selectedTab = ref(route.params.category);
const selectedProductList = ref([]);
const products = inject('products');

const availableCategories = [
  "beauty", "skin-care", "fragrances",
  "laptops", "smartphones", "tablets", "mobile-accessories",
  "mens-shirts", "mens-shoes", "mens-watches",
  "womens-dresses", "tops", "womens-shoes", "womens-watches", "womens-jewellery", "womens-bags",
  "home-decoration", "furniture", "kitchen-accessories",
  "sports-accessories", "sunglasses"
];

// Computed Property
const isValid = computed(() => availableCategories.includes(selectedTab.value));

// Methods
const getNewProductList = () => {
  selectedProductList.value = products.value.filter(
    (product) => product.category === selectedTab.value
  );
};

const goToProduct = (id, selectedTab) => {
  router.push(`/${selectedTab}/${id}`);
};

// Watchers
watchEffect(() => {
  selectedTab.value = route.params.category;
  getNewProductList();
});

watch(products, (newProducts) => {
  if (newProducts) {
    getNewProductList();
  }
});
</script>

<style scoped>
.product-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
}
</style>
