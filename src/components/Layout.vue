<template>
  <div class="category">
    <nav>
      <div v-for="category in categories" :key="category.id" @mouseenter="dropdownMenu = category.id">
        {{ category.name }}
        <div class="relative">
          <div v-if="dropdownMenu === category.id" class="dropdown" @mouseleave="dropdownMenu = null">
            <div v-for="item in category.subcategories" :key="item.id" class="list" @click="test(item)">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="cart-div"><img src="./assets/cartw.svg" alt="cart icon" width="30px" height="59px"><span>{{ totalItem }}</span></div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()

const totalItem=ref(0)
provide('totalItem',totalItem)
const test=(category)=>{
  router.push(`/${category.value}`)
}

const categories = ref([
  {
    id: 0,
    name: "Beauty",
    subcategories: [
      { label: "Beauty", value: "beauty" },
      { label: "Skin Care", value: "skin-care" },
      { label: "Fragrances", value: "fragrances" }
    ]
  },
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      { label: "Laptops", value: "laptops" },
      { label: "Smartphones", value: "smartphones" },
      { label: "Tablets", value: "tablets" },
      { label: "Mobile Accessories", value: "mobile-accessories" }
    ]
  },
  {
    id: 2,
    name: "Men's Fashion",
    subcategories: [
      { label: "Shirts", value: "mens-shirts" },
      { label: "Shoes", value: "mens-shoes" },
      { label: "Watches", value: "mens-watches" }
    ]
  },
  {
    id: 3,
    name: "Women's Fashion",
    subcategories: [
      { label: "Dresses", value: "womens-dresses" },
      { label: "Tops", value: "tops" },
      { label: "Shoes", value: "womens-shoes" },
      { label: "Watches", value: "womens-watches" },
      { label: "Jewellery", value: "womens-jewellery" },
      { label: "Bags", value: "womens-bags" }
    ]
  },
  {
    id: 4,
    name: "Home & Living",
    subcategories: [
      { label: "Decoration", value: "home-decoration" },
      { label: "Furniture", value: "furniture" },
      { label: "Kitchen Accessories", value: "kitchen-accessories" }
    ]
  },
  {
    id: 5,
    name: "Sports",
    subcategories: [
      { label: "Accessories", value: "sports-accessories" },
      { label: "Sunglasses", value: "sunglasses" }
    ]
  }
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
  height: 60px;
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
.cart-div
{
  position: relative;
  width: 40px;
}
.cart-div span{
  position: absolute;
  font-size: 2rem;
  top: -5px;
  right: 0;

}
</style>
