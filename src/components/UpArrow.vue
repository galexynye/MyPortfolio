<template>
    <div id="up-arrow" v-scroll-to="'#app'">
        <font-awesome-icon icon='angle-up' size="3x" />
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('up-arrow').style.display = 'block';
      } else {
        document.getElementById('up-arrow').style.display = 'none';
      }
    }
    window.onscroll = function scrollShow() { scrollFunction(); };
  },
};
</script>

<style lang="scss" scoped>
  #up-arrow{
    position: fixed;
    bottom: 25px;
    right: 25px;
    color: $text;
    &:hover {
      cursor: pointer;
    }
  }
</style>
