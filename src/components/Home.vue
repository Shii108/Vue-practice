<template>
  <div class="test">
    <div class="hero-content">
      <h1 class="hero-title">Find Everything You Need, All in One Place!</h1>
      <p class="hero-subtitle">
        Shop from a wide range of categories including fashion, beauty, electronics, and more!
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.test {
  position: relative;
  height: calc(100dvh - 60px);
  background-image: url("/assets/heroine section.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute; 
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}

.hero-subtitle {
  font-size: 2rem;
  color: white;
}
</style>