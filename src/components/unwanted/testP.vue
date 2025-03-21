<template>
  <div class="testP" v-if="showModal">
    <div style="display: flex; width: 100%; justify-content: space-between;">
      <h3>Product Detail</h3>
      <button @click="closeTestP">X</button>
    </div>
    {{ product.title }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['closeModal'])
const props = defineProps(['product', 'showModal'])

const closeTestP = () => {
  emit('closeModal')
}
</script>

<style>
.testP {
  border: 1px solid black;
  height: 200px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
</style>