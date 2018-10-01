<template>
    <div id="menu-container">
        <transition
            mode="out-in"
            enter-active-class="animated rotateIn"
        >
            <font-awesome-icon v-if="!showMenu" @click="showMenu = !showMenu" icon='bars' size="lg" class="menu--button" key="hamburger" />
            <font-awesome-icon v-if="showMenu" @click="showMenu = !showMenu" icon='times' size="lg" class="menu--button" key="theX" />
        </transition>
        <div :class="{'menu-big': true, menu__resposive: !showMenu}">
            <router-link to="/" ><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt="" @click="smallCloseMenu"></router-link>
            <ul>
                <li><a href="#about" v-scroll-to="'#about'" @click="smallCloseMenu">About</a></li>
                <li><a href="#projects" v-scroll-to="'#projects'" @click="smallCloseMenu" >Projects</a></li>
                <li><a href="#contact" v-scroll-to="'#contact'" @click="smallCloseMenu" >Contact</a></li>
            </ul>
        </div>
        <transition
            mode="out-in"
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideOutLeft"
        >
        <div v-if="showMenu" :class="{'menu-small': true}">
            <router-link to="/" ><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt="" @click="smallCloseMenu"></router-link>
            <ul>
                <li><a href="#about" v-scroll-to="'#about'" @click="smallCloseMenu">About</a></li>
                <li><a href="#projects" v-scroll-to="'#projects'" @click="smallCloseMenu" >Projects</a></li>
                <li><a href="#contact" v-scroll-to="'#contact'" @click="smallCloseMenu" >Contact</a></li>
            </ul>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  beforeMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        this.showMenu = false;
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

.menu-big {
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
.menu-small {
    display: none;
}

.logo {
    height: 30px;
    margin-left: 40px;
    z-index: 1000;
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
    .menu-big {
        display: none;
    }
    .menu-small {
        // @extend .menu-big;
        display: flex;
        background-color: rgb(255, 255, 255);
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 120px;
        margin-right: 100%;
        margin-top: -20px;
        text-align: left;
        ul {
            flex-flow: column;
            align-items: flex-start;
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

    .menu__resposive{
        display: none;
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
