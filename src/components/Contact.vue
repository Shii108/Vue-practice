<template>
  <div class="whole-page">
    <div class="upper">
      <div class="contents">
        <h1>Get in touch</h1>
        <p>Want to get in touch? We'd love to hear from you</p>
        <p>Here's how you can reach us</p>
      </div>
    </div>
    <div class="lower">
      <div class="section1 container">
        <div><img src="/assets/callingimg.svg" alt="calling-icon"></div>
        <h2>Talk to Sales</h2>
        <p>Interested in HubSpot's software?</p>
        <p>Just pick up the phone to chat with a memeber of our sales team</p>
        <p>+977 9808942189</p>
      </div>
      <div class="section2 container">
        <div><img src="/assets/talkmeimg.svg" alt="talk-to-me-icon"></div>
        <h2>Contact Customer Support</h2>
        <p>Sometimes you need a little help from your friends .Or a HubSpot support rep . Don't worry... we're here for
          you</p>
        <button>Contact Support</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.whole-page {
  .upper {
    display: flex;
    align-items: center;
    position: relative;
    height: 48dvh;
    background-size: contain;
    background-position: right;
    background: pink;
    background-repeat: no-repeat;
    // z-index: 100;

    &::before {
      content: "";
      background-image: url("/public/assets/goodshi.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      position: absolute;
      top: 20px;
      width: 100%;
      height: 80%;
      z-index: 1;
    }

    .contents {
      padding: 0 20px;
      position: relative;
      top: -40px;

      h1 {
        font-size: 5rem;
        margin-bottom: 15px;
        font-weight: 500;
      }

      p {
        font-size: 2rem;
        line-height: 1.5;
        font-weight: 300;
      }
    }
  }

  .lower {
    // border: solid 1px green;
    display: flex;
    gap: 20px;
    justify-content: center;
    position: relative;
    top: -75px;

    .container {
      position: relative;
      z-index: 2;
      background-color: white;
      width: 530px;
      height: 370px;
      border: solid 1px black;
      border-radius: 7px;

      img{
        height: 35px;
        width: 35px;
      }
    }

    .section2 {
      button {
        background: red;
        color: white;
        padding: 14px;
        font-size: 2rem;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background: rgb(198, 0, 0)
        }

      }
    }
  }
}
</style>