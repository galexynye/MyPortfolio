<template>
    <div>
        <img :src="work.image" alt="">
        <div class='overlay' :style="{'background-color': bgColor}">
            <h2 class="overlayTitle">{{work.title}}</h2>
            <p class="overlayCaption">{{work.caption}}</p>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    work: Object,
    bgColor: String,
  },
  data() {
    return {
    };
  },
};

</script>

<style lang="scss" scoped>

    img {
        display: block;
        // width: $workWidth;
        max-width: 100%;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        // background-color: alex-color('accent');
        // background-color: #11191b;
        /* background-color: rgb(61, 189, 61); */
    }

    .workContainer:hover .overlay {
        opacity: .99;
        cursor: pointer;
        margin: 0px;
        padding: 0px;
    }

    .overlayTitle {
        color: $dark-text;
        font-size: 2.5em;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .overlayCaption {
        color: $dark-text;
        position: absolute;
        bottom: 0%;
        padding: 20px;

    }

    @media screen and (max-width: 700px) {
        .overlayTitle{
            top: 30%;
        }

    }
</style>
