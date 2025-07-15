<template>
  <div>
    <div class="products p-5 cursor-pointer" v-if="isValid">
      <ul class="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <li v-for="product in selectedProductList" :key="product.id">
          <div class="item products--items p-2 transform  duration-300 ease-out hover:scale-105 border border-[#ccc] shadow-md rounded-md "
            @click="goToProduct(product.id, selectedTab)">
            <div class="h-full w-full object-cover">
              <img :src="product.thumbnail" :alt="product.title"/>
            </div>
            <h3 class="text-base font-semibold truncate">{{ product.title }}</h3>
            <p class="text-sm text-red-500">Price: ${{ product.price }}</p>
            <p><span class="text-yellow-500 text-base">{{ getStars(product.rating) }}</span></p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="product-not-found absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img src="/assets/page-not-found.png" alt="pagenotfound" class="w-150 h-100">
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

const getStars = (rating) => {
  const fullStars = "★".repeat(Math.floor(rating)); // Full stars
  const emptyStars = "☆".repeat(5 - Math.floor(rating)); // Empty stars
  return fullStars + emptyStars;
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

<style scoped lang="scss">

</style>
