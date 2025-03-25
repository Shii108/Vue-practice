<template>
  <div v-if="cartProducts.length > 0" class="cart-container">
    <div v-for="item in cartProducts" :key="item.id">
      <div class="items">
        <input type="checkbox" v-model="item.checked" />
        <img :src="item.image" :alt="item.title" class="product-img" />
        <h3>{{ item.title }}</h3>
        <div class="price-del">
          <p>Price: ${{ item.price }}</p>
          <img src="./assets/delete.svg" alt="deleteicon" @click="deleteItem(item,item.quantity)" />
        </div>
        <p class="quantity">Quantity: {{ item.quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from './store/cartStore';

const cartStore = useCartStore();
const cartProducts = ref(cartStore.itemIds)

const deleteItem=(item,quantity)=>{
  cartStore.removeItem(item.id)
  cartStore.updateQuantity(-quantity)
}


</script>

<style scoped>
.cart-container {
  padding: 20px;
  width: 950px;
}

.items {
  border: solid 1px black;
  display: flex;
  gap: 10px;
  /* align-items: center; */
}

.items img {
  border: solid 1px black;
  width: 150px;
  height: 150px;
}

.items h3 {
  border: solid 1px black;
  font-size: 2rem;
}

.price-del {
  border: solid 1px black;
  font-size: 1.6rem;
}

.price-del img {
  width: 40px;
  height: 40px;
}

.quantity{
  border: solid 1px black;
  font-size: 1.6rem;
}
</style>
