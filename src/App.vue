<template>
  <div id="app">
    <the-menu />
    <router-view/>
    <up-arrow />
  </div>
</template>

<script>
import TheMenu from './components/TheMenu.vue';
import UpArrow from './components/UpArrow.vue';

export default {
  components: {
    TheMenu,
    UpArrow,
  },
};
</script>


<style lang="scss">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
}


</style>
