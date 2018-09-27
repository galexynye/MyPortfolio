<template>
    <div id="menu-container">
        <font-awesome-icon v-if="!showMenu" @click="showMenu = !showMenu" icon='bars' size="lg" class="menu--button" />
        <font-awesome-icon v-if="showMenu" @click="showMenu = !showMenu" icon='times' size="lg" class="menu--button" />
        <div :class="{menu: true, menu__resize: !showMenu, animated: true, slideInDown: showMenu, slideOutUp: !showMenu}">
            <!-- <a href="">Home</a> -->
            <router-link to="/"><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt=""></router-link>
            <ul>
                <li><a href="#projects" v-scroll-to="'#projects'" @click="showMenu = !showMenu" >Projects</a></li>
                <li><a href="#about" v-scroll-to="'#about'" @click="showMenu = !showMenu">About</a></li>
                <li><a href="#contact" v-scroll-to="'#contact'" @click="showMenu = !showMenu" >Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>

#menu-container {
    position: absolute;
    width: 100%;
    z-index: 100;
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
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

@media screen and (min-width: 700px){
    .menu--button {
        display: none;
    }
}

@media screen and (max-width: 700px){
    .menu {
        // display: none;
        background-color: white;
        flex-flow: column;
        text-align: left;
        ul {
            flex-flow: column;
        }
    }

    .logo {
        margin-left: 0px;
    }


    .menu--button {
        color: $text;
        margin-top: 20px;
        &:hover {
            cursor: pointer;
        }
    }
}

</style>
