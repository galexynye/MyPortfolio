<template>
  <div class="home">
      <social />
      <p>Hello</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Social from '@/components/Social.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Social,
  },
};
</script>
