<template>
  <div class="full-page">
    <div v-if="product" class="product-container">
      <div class="img-container"><img :src="product.thumbnail" :alt="product.title" />
        <div class="color-options">
          <button class="color-circle red" aria-label="Red color"></button>
          <button class="color-circle green" aria-label="Green color"></button>
          <button class="color-circle blue" aria-label="Blue color"></button>
        </div>
      </div>
      <div class="details">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="price-quantity-button-ship">
          <p class="price"><span>Price:</span> ${{ product.price }}</p>
          <div class="quantity">
            Quantity
            <button @click="quantity--" :disabled="quantity <= 1">-</button>
            <span>{{ quantity }}</span>
            <button @click="quantity++">+</button>
          </div>
          <p class="stock">{{ product.availabilityStatus }}</p>
          <!-- <p class="discount">Discout::{{ product.discountPercentage }}</p> -->
          <button class="add-to-cart" @click="addToCart(product.title, product.thumbnail, product.price)">
            Add to Cart
          </button>
          <p class="shipping">{{ product.shippingInformation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "./store/cartStore";

// Store & Route
const cartStore = useCartStore();
const route = useRoute();

// Reactive Variables
const quantity = ref(1);
const products = inject("products");

// Computed Property: Find the product by ID
const product = computed(() => {
  const selectedId = Number(route.params.id);
  return products.value?.find((p) => p.id === selectedId) || null;
});

// Function to Add Product to Cart
const addToCart = (title, thumbnail, price) => {
  cartStore.addToCart(quantity.value, route.params.id, title, thumbnail, price);
  cartStore.totalQuantity();
};
</script>

<style scoped lang="scss">
.full-page {
  display: flex;
  justify-content: center;
  height: 89vh;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .product-container {
    height: 600px;
    width: 1000px;
    padding: 40px;
    display: flex;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    .img-container {
      display: flex;
      justify-content: center;
      flex-basis: 35%;
      margin-top: 20px;
      border: solid 1px black;

      img {
        height: 250px;
      }
    }


    .details {
      flex-basis: 65%;

      h2 {
        font-size: 5rem;
        padding: 10px 0;
        // border: solid 1px black;
      }

      p {
        font-size: 2rem;
        line-height: 1.3;
        color: rgb(79, 77, 77);
      }

      .price-quantity-button-ship {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .price {
        margin-top: 20px;
        color: black;
        font-weight: bold;

        span {
          color: red;
        }
      }

      .add-to-cart {
        background: red;
        color: white;
        padding: 14px;
        font-size: 2rem;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;

        &:hover {
          background: rgb(198, 0, 0)
        }

      }

      .quantity {
        font-size: 2rem;
        display: flex;
        align-items: center;
        gap: 10px;

        button {
          width: 30px;
          height: 30px;
          background-color: #f0f0f0;
          border: none;
          cursor: pointer;

          &:hover {
            background-color: #e1e0e0;
          }
        }

        span {
          width: 30px;
          font-weight: 500;
          text-align: center;
        }
      }

      .stock {
        font-size: 2rem;
        // color: #2ecc71;
      }

      .shipping {
        font-size: 2rem;
        // color: #3498db; 
      }
    }
  }
}

.color-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:focus,
  &:active {
    border: 2px solid #000;
    outline: none;
  }
}

.red {
  background-color: #e74c3c;
}

.green {
  background-color: #2ecc71;
}

.blue {
  background-color: #3498db;
}

</style>
