<template>
  <div class="whole-page">
    <div class="upper p-5 h-[46dvh] bg-[oklch(92.8% 0.006 264.531)]">
      <div class="w-[250px] m-auto">
        <img src="/assets/goodshi.webp" alt="">
      </div>
      <div class="flex flex-col items-center gap-2  ">
        <h1 class="text-4xl">Get in touch</h1>
        <p class="text-xl">Want to get in touch? We'd love to hear from you</p>
        <p class="text-xl">Here's how you can reach us</p>
      </div>
    </div>
    <div class="flex gap-5 justify-center relative -top-10 h-[370px]">
      <div class="flex flex-col justify-center items-center gap-5  w-[530px] bg-white shadow-md rounded-md p-4">
        <img src="/assets/callingimg.svg" alt="calling-icon" class=" h-[50px] w-[50px]">
        <h2 class="font-semibold text-2xl">Talk to Sales</h2>
        <p class="text-base">Interested in HubSpot's software?</p>
        <p class="text-base">Just pick up the phone to chat with a memeber of our sales team</p>
        <p class="text-base">Our agents are there 24/7</p>
        <p class="text-base underline"><a href="tel:+977 8484847474">+977 9874747474</a></p>
      </div>
      <div class="flex flex-col gap-5 justify-center items-center  w-[530px] bg-white shadow-md rounded-md p-4">
        <img src="/assets/talkmeimg.svg" alt="talk-to-me-icon" class="h-[50px] w-[50px]">
        <h2 class="text-2xl font-semibold">Contact Customer Support</h2>
        <p class="text-base">Sometimes things don’t go as planned. We get it.</p>
        <p class="text-base">When in doubt, reach out. We’re here to help.</p>
        <button class="bg-red-500 text-white p-4 rounded-md cursor-pointer hover:bg-red-600 text-md">Contact
          Support</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.whole-page {
  .upper {
    background: oklch(92.8% 0.006 264.531);
  }
}
</style>