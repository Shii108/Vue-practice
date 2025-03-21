<template>
  <div>
    Test Here
    <button @click="sendData">Send Data</button>
    <TestP :product="data" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TestP from './testP.vue';
let data = ref()

const sendData = () => {
  data.value = {
    title: "Product Title",
    price: '123'
  }
}
</script>

<style lang="scss" scoped></style>