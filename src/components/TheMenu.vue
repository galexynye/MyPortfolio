<template>
    <div id="menu-container">
        <div class="menu">
            <!-- <a href="">Home</a> -->
            <router-link to="/"><img src="../assets/TheSexyRussians_ICON.svg" class="logo" alt=""></router-link>
            <ul>
                <!-- <li><a href="#">Home</a></li> -->
                <li><a href="#projects" v-scroll-to="'#projects'">Projects</a></li>
                <li><a href="#about" v-scroll-to="'#about'">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
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
}

.logo {
    max-height: 30px;
    min-height: 30px;
    margin-left: 40px;
}

 ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    background-color: #ffffff00;
    li{
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

</style>
