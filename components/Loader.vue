<template lang="html">
  <div class="loading-page">
    <div class="image">
      <img :src="getImage('loader-logo.svg')" alt="NSHP" />
    </div>
  </div>
</template>

<script>
import image from '../mixin/image'
export default {
  mixins: [image],
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff96;
  text-align: center;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    padding: 15px;
    animation: pulse 2s ease-in-out infinite;

    img {
      height: 100%;
      width: 100%;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 #58bb8c30;
  }
  30% {
    transform: scale(1);
    box-shadow: 0 0 0 15px #58bb8c20;
  }
  50% {
    transform: scale(1);
    box-shadow: 0 0 0 25px #58bb8c10;
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 35px #58bb8c05;
  }
}
</style>
