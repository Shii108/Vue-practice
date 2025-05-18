<template>
  <section class="test relative h-[calc(100dvh-60px)] flex flex-col bg-cover bg-no-repeat bg-center">
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 flex flex-col mt-10 gap-2  sm:gap-3 md:gap-5 p-4 lg:mt-30">
      <p class="text-sm sm:text-base md:text-xl uppercase text-red-300 tracking-wide">
        Your One‑Stop Shopping Destination
      </p>

      <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-snug tracking-tight">
        Find Everything<br/> You Need, All in One Place!
      </h1>

      <div class="text-lg sm:text-xl md:text-3xl text-white leading-relaxed">
        <p>From the latest fashion trends to must-have gadgets,</p>
        <p>find everything you love—all in one place.</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 mt-4">
        <button type="button"
          class="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 ">
          Shop Now
        </button>
        <button type="button"
          class="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600">
          Browse Categories
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.test {
  background-image: url("/assets/heroine section.svg");
}

</style>