<template>
  <div class="home">
      <portfolio />
      <social />

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Social from '@/components/Social.vue';
import Portfolio from './Portfolio.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Social,
    Portfolio,
  },
};
</script>
