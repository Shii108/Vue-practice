<template>
  <div class="upper-section">
    <h1>Have a Question we didn't answer?</h1>
    <h2>Don't be shy , ask the CheekSquad!</h2>
    <p>Monday-Sunday: 7:00am - 5:00pm</p>
    <div class="contact-us-by">
      <div class="contact-us">
        <p>Lets have a chat</p>
        <button>Start a Live Chat</button>
      </div>
      <div class="contact-us">
        <p>Drop us a line</p>
        <button>Submit a Request</button>
      </div>
      <div class="contact-us">
        <p>Text us</p>
        <button>Text</button>
      </div>
      <div class="contact-us">
        <p>Tweet us</p>
        <p>Facebook us</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.upper-section{
  h1{
    font-size: 4rem;
  }

  h2{
    font-size: 2rem;
  }

  p{
    font-size: 2rem;
  }
}

.contact-us-by{
  border: solid 1px black;
  display: flex;
  gap: 30px;


  .contact-us{
    background: green;
    border: solid 1px black;
    height: 200px;
    width: 200px;
  }

}
</style>