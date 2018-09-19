<template>
  <div id="landing">
    <!-- <p>I'm the landing</p> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
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
    position: absolute;
    background-color: #fafafa00;
  }
</style>
