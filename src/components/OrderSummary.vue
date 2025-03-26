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
    <button class="checkout">Procced to Checkout ({{ cartStore.total_buying_item }})</button>
  </div>
  <p>okey</p>
</template>

<script setup>

import { useCartStore } from '../store/cartStore';
const cartStore = useCartStore();

</script>

<style scoped>
.order-summary {
  position: fixed;
  right: 350px;
  font-size: 2rem;
  border: solid 1px black;
  width: 320px;
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
}

.checkout:hover {
  cursor: pointer;
  background-color: #0822c8;
}
</style>