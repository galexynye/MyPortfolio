<template>
    <div>
        portfolio
        <!-- <img :src="portfolio[0].img" alt=""> -->
        <div class="workContainer" v-for="work in portfolio" :key="work.title" >
            <img :src="work.image" alt="">
            <div class="overlay">
                <div class="overlayTitle">{{work.title}}</div>
                <div class="overlayCaption">{{work.caption}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [
        {
          title: 'Grimm Forest',
          image: require('../assets/GFM_BlackBGWhiteTree_500x500.png'),
          caption: 'A Music website with a searchable playlist made with VueJs and AWS for the backend.\n \n Work in progress.',
        },
      ],

    };
  },
};
/*
Sites
- Pictures Featuring the site
- On hover there is an overlay
    - Grimm Forest
    - Portfolio Site
    - Midi Sequencing
    - Hudson Street Cottage
    - Validating Phone numbers

Apps
    - Just Lists of text
    - Clicking on a text will animating in a component below

*/

</script>

<style lang="scss" scoped>
     .workContainer {
        position: relative;
        margin-bottom:15px;
        width: 500px;

    }

    img {
        display: block;
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
        background-color: alex-color('accent');
        /* background-color: rgb(61, 189, 61); */
    }

    .workContainer:hover .overlay {
        opacity: .99;
        cursor: pointer;
        margin: 0px;
        padding: 0px;
    }

    .overlayTitle {
        color: $text;
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
        color: $text;
        position: absolute;
        bottom: 0%;
        padding: 20px;

    }
</style>
