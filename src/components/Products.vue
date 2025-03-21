<template>
  <div class="products">
    <ul>
      <li v-for="(product) in selectedProductList" :key="product.id">
        <div class="item" @click="goToProduct(product.id, selectedTab)">
          <img :src="product.thumbnail" :alt="product.title" class="product-img" />
          <h3>{{ product.title }}</h3>
          <p>Price: ${{ product.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, inject, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const selectedTab = ref(route.params.category)
const selectedProductList = ref([])

const products = inject('products')

const getNewProducList = () => {
  selectedProductList.value = products.value.filter((product) => product.category === selectedTab.value)
}
const goToProduct = (id, selectedTab) => {
  router.push(`/${selectedTab}/${id}`)
};

watchEffect(() => {
  selectedTab.value = route.params.category;
  getNewProducList();
});

watch(products, (newProducts) => {
  if (newProducts) {
    getNewProducList();
  }
});


</script>
