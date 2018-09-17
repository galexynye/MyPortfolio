<template>
  <div class="home">
      <landing />
      <landing-canvas />
      <portfolio />
      <social />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

import Social from '@/components/Social.vue';
import landing from '../components/Landing.vue';
import Portfolio from './Portfolio.vue';
import LandingCanvas from '../components/LandingCanvas.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    landing,
    LandingCanvas,
    Social,
    Portfolio,
  },
};
</script>
