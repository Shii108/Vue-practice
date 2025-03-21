<template>
  <div class="category">
    <nav>
      <div v-for="category in categories" :key="category.id" @mouseenter="dropdownMenu = category.id">
        {{ category.name }}
        <div class="relative">
          <div v-if="dropdownMenu === category.id" class="dropdown" @mouseleave="dropdownMenu = null">
            <div v-for="item in category.subcategories" :key="item.id" class="list" @click="test(item)">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()

const test=(category)=>{
  router.push(`/${category}`)
}
const categories = ref([
{ id: 0, name: "Beauty", subcategories: ["beauty", "skin-care", "fragrances"] },
{ id: 1, name: "Electronics", subcategories: ["laptops", "smartphones", "tablets", "mobile-accessories"] },
{ id: 2, name: "Men's Fashion", subcategories: ["mens-shirts", "mens-shoes", "mens-watches"] },
{ id: 3, name: "Women's Fashion", subcategories: ["womens-dresses", "tops", "womens-shoes", "womens-watches", "womens-jewellery", "womens-bags"] },
{ id: 4, name: "Home & Living", subcategories: ["home-decoration", "furniture", "kitchen-accessories"] },
{ id: 5, name: "Sports", subcategories: ["sports-accessories", "sunglasses"] }
]);

const dropdownMenu = ref(null)

const products = ref([])

const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=200')
    if (!response.ok) throw new Error('Failed to fetch')
    const result = await response.json()
    products.value = result.products
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => fetchProducts())
provide('products',products)

</script>

<style scoped>
.category {
  margin-top: 10px;
  padding: 0 20px;
}

nav {
  background-color: #232F3E;
  color: white;
  font-size: 2rem;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
}

.relative {
  position: relative;
}

.dropdown {
  position: absolute;
  margin-top: 20px;
  border: solid 1px black;
  background: white;
  padding: 10px;
  min-width: 150px;
  white-space: nowrap; 
  color: black;
}

.list {
  border: 1px black solid;
  padding: 2px;
}

.router-link-active {
  color: red;
  text-decoration: underline;
}
</style>
