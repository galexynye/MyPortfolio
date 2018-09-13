<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

* {
  margin: 0px;
  padding: 0px;

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

  // color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: alex-color('accent');
    }
  }


// $scotch-colors: (
//   'primary': #8e3329,
//   'accent': #d98328,
//   'secondary': #5a1321,
//   'foreground': #191919,
//   'background': #e9e9e9
// );
// $alex-colors: (
//   'text': #3b3a3a,
//   'primary': #0b4f6c,
//   // 'accent': #01baef,
//   'accent': #6ada90,
//   'secondary': #20bf55,
//   'foreground': #757575,
//   'background': #ffffff,
// );


}
</style>
