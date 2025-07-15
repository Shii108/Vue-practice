<template>
  <div class="overall-page">
    <div class="content1">
      <h1>Select Payment Method</h1>
      <div class="payment-methods">
        <div class="cash-delivery">
          <img src="/assets/cash.png" alt="money" class="payment-image">
          <p>Cash on delivery</p>
        </div>
        <div class="other-method">
          <p>Sorry, currently there is no other payment method and you might be wondering why? Well, cause I ain't
            coding
            all that, kindly pay in cash, don't make it too hard for me muah😘😘</p>
        </div>
      </div>
      <div class="description">
        <ul class="border p-4 list-disc pl-5 space-y-2 text-lg ">
          <li>You may pay in cash to our courier upon receiving your parcel at the doorstep.</li>
          <li>Before agreeing to receive the parcel, check if your delivery status has been updated to 'Out for
            Delivery'.</li>
          <li>Before receiving, confirm that the airway bill shows that the parcel is from Daraz.</li>
          <li>Before you make payment to the courier, confirm your order number, sender information, and tracking number
            on the parcel.</li>
        </ul>
        <button @click="showMessage()"
          class="border mt-2 bg-green-500 cursor-pointer py-3 px-6 rounded-md text-base hover:bg-green-600 text-white transform hover:scale-105 transition duration-200 ease-out">Confirm
          Order</button>
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
  toast.success("Arigato my lovely clients, please keep on coming😘", {
    toastClassName: "my-custom-toast", timeout: 1500, hideProgressBar: true,
  });
}
</script>

<style scoped lang="scss">
.order-summary {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 2px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  color: #4a5568;
}

.summary-item.total {
  padding-top: 1.6rem;
  border-top: 2px solid #e2e8f0;
  margin-top: 1.6rem;
  color: #1a202c;
  font-weight: 600;
}

.summary-item.total span {
  color: #37ba9a;
  font-size: 1.8rem;
}
</style>
