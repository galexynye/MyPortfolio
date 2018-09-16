<template>
    <div class="section">
        <div  class="work">
        <div class="workContainer" v-for="work in portfolio" :key="work.title" >
           <img :src="work.image" alt="">
                 <div class='overlay' :style="{'background-color': work.color}">
            <h2 class="overlayTitle">{{work.title}}</h2>
            <p class="overlayCaption">{{work.caption}}</p>
        </div>
        </div>
        </div>

    </div>
</template>

<script>

export default {
  props: {
    // work: Object,
    // bgColor: String,
  },
  data() {
    return {
      // Data should be an array
    };
  },
};

</script>

<style lang="scss" scoped>

    $workWidth: 800px;

    .work {
        display: flex;
        // flex-flow: wrap;
        justify-content: space-between;
        margin: auto;
    }


       .workContainer {
        position: relative;
        margin: auto;
        width: $workWidth;
    }

    img {
        display: block;
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
        text-align: center;

    }

    @media screen and (max-width: 600px) {
        .overlayTitle{
            top: 30%;
        }

    }
</style>
