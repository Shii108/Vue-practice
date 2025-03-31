<template>
  <div class="overall-page">
    <div class="content1">
      <h1>Select Payment Method</h1>
      <div class="payment-methods">
        <div class="cash-delivery">
          <img src="/assets/cash.png" alt="money">
          <p>Cash on delivery</p>
        </div>
        <div class="other-method">
          <p>Sorry currently there is no other payment method and you might be wondering why? well cause i aint coding
            all
            that , kindly pay in cash dont make it too hard for me muah😘😘 </p>
        </div>
      </div>
      <div class="description">
        <ul>
          <li>You may pay in cash to our courier upon receiving your parcel at the doorstep.</li>
          <li>Before agreeing to receive the parcel, check if your delivery status has been updated to 'Out for
            Delivery'.
          </li>
          <li>Before receiving, confirm that the airway bill shows that the parcel is from Daraz.</li>
          <li>Before you make payment to the courier, confirm your order number, sender information, and tracking number
            on the parcel.</li>
        </ul>
        <button @click="showMessage()">Confirm Order</button>
      </div>
    </div>
    <div class="content2">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from './store/cartStore';
import { useToast } from 'vue-toastification';
const cartStore = useCartStore();
const toast = useToast()

const showMessage = () => {
    toast.success("arigato my lovely clients , please keep on comming😘", {
      toastClassName: "my-custom-toast", timeout: 1500, hideProgressBar: true,
    });
  }
</script>

<style scoped>
.overall-page {
  padding: 20px;
  display: flex;
  gap: 50px;
}

.overall-page h1 {
  font-size: 2rem;
}

.payment-methods {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.cash-delivery {
  border: solid 1px black;
}

.cash-delivery p {
  font-size: 1.7rem;
  font-weight: 500;
}

.other-method {
  font-size: 1.5rem;
  line-height: 1.3;
  border: solid 1px black;
  width: 500px;
}

.description {
  padding: 20px;
  border: solid 1px black;
  width: 900px;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 1.5rem;
}

.description ul li::before {
  content: "- ";
}

.description button {
  color: white;
  background-color: #37ba9a;
  margin-top: 15px;
  width: 200px;
  padding: 14px;
  border: solid 1px black;
}

.description button:hover {
  background-color: #30a48b;
}

.order-summary {
  margin-top: 20px;
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
</style>