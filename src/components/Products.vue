<template>
  <div>
    <div class="products" v-if="isValid">
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
    <div v-else class="product-not-found">
      Not found
      <p>Sorry the item you are searching for is not availabe</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, inject, watchEffect, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// const props = defineProps(['category'])

const selectedTab = ref(route.params.category)
const selectedProductList = ref([])
const availableCategories = ref([])

const products = inject('products')

const getNewProducList = () => {
  availableCategories.value = [...new Set(products.value.map((product) => product.category))]
  selectedProductList.value = products.value.filter((product) => product.category === selectedTab.value)
}
const isValid = computed(() => {
  return availableCategories.value.includes(selectedTab.value)
})
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

<style scoped>
.product-not-found
{
  font-size: 7rem;
  margin-top: 300px;
  text-align: center;
}

.product-not-found p
{
  font-size: 2rem;
};
</style>
