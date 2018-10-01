<template>
    <div id="menu-container">
        <transition
            mode="out-in"
            enter-active-class="animated rotateIn"
        >
            <font-awesome-icon v-if="!showMenu" @click="showMenu = !showMenu" icon='bars' size="lg" class="menu--button" key="hamburger" />
            <font-awesome-icon v-if="showMenu" @click="showMenu = !showMenu" icon='times' size="lg" class="menu--button" key="theX" />
        </transition>
        <!-- big menu -->
        <div class="menu-big">
            <router-link to="/" ><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt="" @click="smallCloseMenu"></router-link>
            <ul>
                <li v-for="link in menu" :key="link.name" ><a :href="link.href" v-scroll-to="link.scrollTo" @click="smallCloseMenu">{{link.name}}</a></li>
            </ul>
        </div>
        <!-- small menu -->
        <transition
            mode="out-in"
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideOutLeft"
        >
        <div v-if="showMenu" class="menu-small">
            <router-link to="/" ><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt="" @click="smallCloseMenu"></router-link>
            <ul>
                <li v-for="link in menu" :key="link.name" ><a :href="link.href" v-scroll-to="link.scrollTo" @click="smallCloseMenu">{{link.name}}</a></li>
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
      menu: [
        { href: '#about', scrollTo: '#about', name: 'About' },
        { href: '#projects', scrollTo: '#projects', name: 'Projects' },
        { href: '#contact', scrollTo: '#contact', name: 'Contact' },
      ],
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
      this.showMenu = !this.showMenu;
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
    .logo {
        margin-right: 100px;
    }
    .menu--button {
        z-index: 10000;
        color: $text;
        margin-top: 20px;
        margin-right: 30px;
        &:hover {
            cursor: pointer;
        }
    }
}

</style>
