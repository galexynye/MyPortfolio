<template>
    <div id="down-arrow" class="animated swing slow infinite" v-scroll-to="'#projects'">
        <font-awesome-icon icon='angle-down' size="3x" />
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
