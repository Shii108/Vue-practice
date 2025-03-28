<template>
  <div class="order-summary">
    <div class="summary-item">
      <p>Subtotal ({{ cartStore.total_buying_item }})</p>
      <span>{{ cartStore.subTotal }}</span>
    </div>

    <div class="summary-item">
      <p>Shipping Fee</p>
      <span>{{ cartStore.shippingCost }}</span>
    </div>

    <div class="summary-item total">
      <p><strong>Total:</strong></p>
      <span><strong>{{ cartStore.totalCost }}</strong></span>
    </div>
    <button class="checkout" @click="paymentPage(cartStore.total_buying_item)">Procced to Checkout ({{ cartStore.total_buying_item }})</button>
  </div>
</template>

<script setup>

import { useCartStore } from './store/cartStore';
import { useRouter } from 'vue-router';
const router = useRouter();
const cartStore = useCartStore();

const paymentPage=(item)=>{
  if(item>0){
    router.push('/payment')
  }
}

</script>

<style scoped>
.order-summary {
  position: fixed;
  right: 320px;
  font-size: 2rem;
  border: solid 1px black;
  width: 350px;
  padding: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.checkout {
  color: white;
  margin-top: 8px;
  border: solid 1px black;
  background-color: #0660FE;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
}

.checkout:hover {
  cursor: pointer;
  background-color: #0822c8;
}

</style>