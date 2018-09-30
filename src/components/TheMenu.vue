<template>
    <div id="menu-container">
        <transition
            mode="out-in"
            enter-active-class="animated rotateIn"
        >
            <font-awesome-icon v-if="!showMenu" @click="showMenu = !showMenu" icon='bars' size="lg" class="menu--button" key="hamburger" />
            <font-awesome-icon v-if="showMenu" @click="showMenu = !showMenu" icon='times' size="lg" class="menu--button" key="theX" />
        </transition>
        <div :class="{menu: true, menu__resize: !showMenu, animated: true, slideInDown: showMenu, fadeOut: !showMenu}">
            <router-link to="/" ><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt="" @click="smallCloseMenu"></router-link>
            <ul>
                <li><a href="#projects" v-scroll-to="'#projects'" @click="smallCloseMenu" >Projects</a></li>
                <li><a href="#about" v-scroll-to="'#about'" @click="smallCloseMenu">About</a></li>
                <li><a href="#contact" v-scroll-to="'#contact'" @click="smallCloseMenu" >Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
      isSmall: false,
    };
  },
  beforeMount() {
    if (window.innerWidth > 600) {
      this.showMenu = true;
      this.isSmall = false;
    } else {
      this.showMenu = false;
      this.isSmall = true;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        this.showMenu = true;
        this.isSmall = false;
      } else {
        this.showMenu = false;
        this.isSmall = true;
      }
    });
  },
  methods: {
    smallCloseMenu() {
      if (this.isSmall) {
        this.showMenu = !this.showMenu;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

#menu-container {
    position: absolute;
    width: 100%;
    z-index: 100;
    text-align: right;
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 25px auto;
    ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    background-color: #ffffff00;
    li {
        padding: 10px 25px;
        font-size: 1.4rem;
        }
        a {
            &:hover{
            cursor: pointer;
            color: $accent;
            }
        }
    }
}

.logo {
    height: 30px;
    margin-left: 40px;
}
.menu__resize{
    display: none;
}

@media screen and (min-width: 600px){
    .menu--button {
        display: none;

    }
}

@media screen and (max-width: 600px){
    .menu {
        background-color: rgb(255, 255, 255);
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 250px;
        margin-right: 100%;
        margin-top: -20px;
        text-align: left;
        ul {
            flex-flow: column;
            align-items: flex-start;
        }
    }

    .logo {
        margin-right: 100px;
    }
    .menu--button {
        color: $text;
        margin-top: 20px;
        margin-right: 30px;
        &:hover {
            cursor: pointer;
        }
    }
}

</style>
