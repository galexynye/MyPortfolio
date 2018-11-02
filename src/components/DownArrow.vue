<template>
    <div id="down-arrow" class="" v-scroll-to="'#about'">
        <font-awesome-icon icon='angle-down' size="3x" class="animated bounce slow infinite" />
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
    #down-arrow{
        position: absolute;
        bottom: 20px;
        left: 30px;
        color: $text;
        &:hover {
            cursor: pointer;
        }
    }
</style>
