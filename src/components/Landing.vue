<template>
  <div id="landing">
    <!-- <p>I'm the landing</p> -->
    <landing-canvas />
    <down-arrow />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingCanvas from '../components/LandingCanvas.vue';
// import DownArrow from '../components/DownArrow.vue';

export default {
  name: 'home',
  components: {
    LandingCanvas,
    // DownArrow,
  },
  mounted() {
    const landing = document.getElementById('landing');
    landing.width = window.innerWidth - 15;
    landing.height = window.innerHeight;

    window.addEventListener(
      'resize',
      () => {
        landing.width = window.innerWidth - 15;
        landing.height = window.innerHeight;
      },
    );
  },
};
</script>


<style lang="scss" scoped>
  #landing {
    position: relative;
    min-height: 100vh;
    background-color: #fafafa00;
  }
</style>
