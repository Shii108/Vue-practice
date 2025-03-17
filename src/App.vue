<template>
  <h1>Welcome to My E-Commerce</h1>
</template>

<script setup>
import { ref, onMounted, computed , watch} from 'vue' 

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
  const category=products.value.map(p=>p.category)
  const filterCategory=new Set(category)
  console.log(filterCategory);
}
onMounted(() => {
  fetchProducts()
})

// Filtering products
const beautyProducts = computed(() => 
  products.value.filter(p => ['beauty', 'skin-care', 'fragrances'].includes(p.category))
);

const electronicsProducts = computed(() => 
  products.value.filter(p => ['laptops', 'smartphones', 'tablets', 'mobile-accessories'].includes(p.category))
);

const fashionProducts = computed(() => 
  products.value.filter(p => [
    'mens-shirts', 'womens-dresses', 'mens-shoes', 'womens-shoes', 
    'mens-watches', 'womens-watches', 'womens-jewellery', 'womens-bags', 'tops'
  ].includes(p.category))
);

const groceriesProducts = computed(() => 
  products.value.filter(p => ['groceries'].includes(p.category))
);

const homeFurProducts = computed(() => 
  products.value.filter(p => ['home-decoration', 'furniture', 'kitchen-accessories'].includes(p.category))
);

const sportsProducts = computed(() => 
  products.value.filter(p => ['sports-accessories', 'sunglasses'].includes(p.category))
);


</script>