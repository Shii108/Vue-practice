<template>
  <div v-if="cartProducts.length > 0" class="cart-container">
    <div v-for="item in cartProducts" :key="item.id">
      <div class="items">
        <input type="checkbox" v-model="item.checked" />
        <img :src="item.image" :alt="item.title" class="product-img" />
        <h3>{{ item.title }}</h3>
        <div class="price-del">
          <p>Price: ${{ item.price }}</p>
          <img src="./assets/delete.svg" alt="deleteicon" @click="deleteItem(item)" />
        </div>
        <div class="quantity">
          <button @click="updatePositive(item,item.quantity,'sub')" :disabled="item.quantity===1" class="decrease-btn">-</button>
          <p>Quantity: {{ item.quantity }}</p>
          <button @click="updatePositive(item,item.quantity,'add')">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from './store/cartStore';

const cartStore = useCartStore();
const cartProducts = ref(cartStore.itemIds)

const deleteItem = (item) => {
  cartStore.removeItem(item.id)
  cartStore.totalQuantity();
}

const updatePositive = (item,quantity,action)=>{
  cartStore.updateQuantity(item.id,action === "add" ? quantity+1 : quantity-1)
  cartStore.totalQuantity();   
}

</script>

<style scoped>
.cart-container {
  padding: 20px;
  width: 850px;
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
  height: 115px;
}

.items h3 {
  border: solid 1px pink;
  font-size: 2rem;
  width: 250px;
}

.price-del {
  width: 150px;
  border: solid 1px black;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.price-del img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  align-self: center;
}

.quantity {
  border: solid 1px black;
  font-size: 1.6rem;
  display: flex;
  flex-grow: 1;
}
.quantity p{
  border: solid 1px black;
  padding: 0 40px;
  width: 200px;
}
.quantity button{
  border: solid 1px black;;
  width: 30px;
  height: 25px;
}

.decrease-btn:disabled {
  cursor: not-allowed;
}
</style>
