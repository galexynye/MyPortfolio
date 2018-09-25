<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div> -->
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

* {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

.subject {
  margin: 20px 30px 75px 30px;
}

.section {
  max-width: $section-width;
  margin: auto;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}


.section-solo {
  margin: 10px;
}

.section-column {
  margin: 10px;
  width: $section-column-width;
}

.section-column__flex {
  @extend .section-column;
  display: flex;
  flex-flow: column;
}

.section-title {
  color:$foreground;
  font-size: 1.2rem;
  // text-decoration: underline;
  margin-bottom: 25px;
}


body {
  background-color: alex-color('background');
}

a {
  color: $text;
  text-decoration: none;
  :hover{
    color: alex-color('accent')
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: alex-color('accent');
    }
  }

// NOTE: THIS MEDIA QUERY IS NOT RECOGNIZED INSIDE COMPONENTS, MUST BE COPIED INTO COMPONENTS
  @media screen and (max-width: 900px) {
    .section {
      flex-wrap: wrap;
    }
    .section-column {
      margin: 10px;
      width: 600px;
    }
  }
}
</style>
