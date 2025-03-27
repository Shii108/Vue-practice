<template>
  <div class="category">
    <nav @mouseleave="dropdownMenu = null">
      <div v-for="category in categories" :key="category.id" @mouseenter="dropdownMenu = category.id">
        {{ category.name }}
        <div class="relative">
          <div v-if="dropdownMenu === category.id" class="dropdown" @mouseleave="dropdownMenu = null">
            <div v-for="item in category.subcategories" :key="item.id" class="list" @click="navigateToCategory(item)">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="cart-div" @click="showCart = true">
        <img src="/assets/cartw.svg" alt="cart icon" width="30px" height="59px" />
        <span>{{ cartStore.totalItem }}</span>
      </div>
    </nav>
    <div v-if="showCart">
      <div class="cart-content">
        <div class="cart-upper">
          <p>Shopping Cart Preview</p>
          <button @click="goToCart()">Buy Now</button>
          <button @click="showCart = false">X</button>
        </div>
        <div v-for="item in cartStore.item_details" :key="item.id" class="cart-item">
          <div class="img-checkbox">
            <input type="checkbox" v-model="item.checked" @click="cartStore.updateChecked(item.id)" />
            <img :src="item.image" alt="Product Image" class="cart-img" />
          </div>
          <div class="detailed-info">
            <div class="cart-title">{{ item.title }}</div>
            <p class="price">Price: ${{ item.price }}</p>
            <div class="quantity-delete">
              <div class="quantity">
                <button @click="updatePositive(item, item.quantity, 'sub')" :disabled="item.quantity === 1"
                  class="decrease-btn">-</button>
                <p>Quantity: {{ item.quantity }}</p>
                <button @click="updatePositive(item, item.quantity, 'add')">+</button>
              </div>
              <img src="/assets/delete.svg" alt="deleteicon" @click="deleteItem(item)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "./store/cartStore";

// Router & Store
const router = useRouter();
const cartStore = useCartStore();

// Reactive Variables
const dropdownMenu = ref(null);
const products = ref([]);
const showCart = ref(false);
provide("products", products);

// Categories Data
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

// Functions
const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=200");
    if (!response.ok) throw new Error("Failed to fetch");
    const result = await response.json();
    products.value = result.products;
  } catch (error) {
    console.error(error);
  }
};

const navigateToCategory = (category) => {
  router.push(`/${category.value}`);
};

const goToCart = () => {
  router.push("/cart");
  showCart.value = false;
};

const deleteItem = (item) => {
  cartStore.removeItem(item.id)
  cartStore.totalQuantity();
}

const updatePositive = (item, quantity, action) => {
  cartStore.updateQuantity(item.id, action === "add" ? quantity + 1 : quantity - 1)
  cartStore.totalQuantity();
}


// Lifecycle Hook
onMounted(fetchProducts);
</script>

<style scoped>
.category {
  margin-top: 10px;
  padding: 0 20px;
}

nav {
  cursor: pointer;
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
  cursor: pointer;
}

.cart-div {
  margin-left: auto;
  position: relative;
  width: 40px;
  cursor: pointer;
}

.cart-div span {
  position: absolute;
  font-size: 2rem;
  top: -5px;
  right: 0;
}

.cart-content {
  cursor: default;
  background: #8D6E63;
  color: #ECE7E5;
  min-height: 831px;
  width: 550px;
  position: absolute;
  border: solid 1px black;
  top: 0px;
  right: 0px;
  z-index: 100;
}

.cart-upper {
  border: solid 1px black;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-upper button {
  padding: 16px;
  font-size: 1.6rem;
  color: white;
  border: solid 1px black;
  cursor: pointer;
}

.cart-upper button:nth-of-type(1) {
  background-color: #0660FE;
}

.cart-upper p {
  font-size: 2.4rem;
  display: inline-block;
}

.cart-item {
  display: flex;
  gap: 10px;
  border-bottom: solid 1px black;
  height: 200px;
}

.img-checkbox {
  border: solid 1px black;
  display: flex;
  width: 220px;
  justify-content: space-around;
}
.detailed-info {
  border: solid 1px black;
  flex-grow: 1;
}

.cart-title {
  font-size: 2rem;
  border: solid 1px pink;
  padding: 10px;
}

.price{
  font-size: 1.6rem;
  font-weight: bold;
  border: solid 1px black;
  padding: 5px;
  margin-top: 10px;
}
.quantity-delete{
  margin-top: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  border: solid 1px black;
}
.quantity-delete img{
  height: 30px;
}

.quantity{
  font-size: 1.6rem;
  border: solid 1px black;
  display: flex;
  width: 160px;
  align-items: center;
  justify-content: space-between;
}
.quantity button{
  width: 20px;
  border: solid 1px black;
}

.quantity p{
  width: 140px;
  border: solid 1px orange;
}
</style>
