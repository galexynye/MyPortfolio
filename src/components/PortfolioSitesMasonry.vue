<template>
    <div>
        <div class="masonrySection">
            <div v-masonry transition-duration="0.3s" item-selector=".item" fit-width="true" class="theMasonry" gutter=".gutter-item" >
                <div class="gutter-item"></div>
                <div v-masonry-tile class="item workContainer" v-for="work in portfolio" :key="work.title" >
                    <img :src = work.image alt="" @click='loadPortfolioWork(work)'>
                    <div class="overlay" :style="{'background-color': work.color}" @click='loadPortfolioWork(work)'>
                         <h2 class="overlayTitle">{{work.title}}</h2>
                    <p class="overlayCaption">{{work.caption}}</p>
                    </div>

                </div>
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
          image: require('../assets/WebSites/GFM/GFM_WhiteTree_809x500.png'),
          caption: 'A music website with a searchable playlist made with VueJs and AWS for the backend.\n \n Work in progress.',
          color: '#11191b',
        },
        {
          title: 'Midi Sequencing',
          image: require('../assets/WebSites/MS/MS_809x500_LogoRainbow.png'),
          caption: 'A blog about music production made with Gatsby.js/React that is deployed with CI via Github and Netifly.',
          color: '#fbd703',
        },
        {
          title: 'Grimm Forest',
          image: require('../assets/WebSites/GFM/GFM_WhiteTree_809x500.png'),
          caption: 'A music website with a searchable playlist made with VueJs and AWS for the backend.\n \n Work in progress.',
          color: '#11191b',
        },
        {
          title: 'Midi Sequencing',
          image: require('../assets/WebSites/MS/MS_809x500_LogoRainbow.png'),
          caption: 'A blog about music production made with Gatsby.js/React that is deployed with CI via Github and Netifly.',
          color: '#fbd703',
        },
      ],
    };
  },
  methods: {
  },

};
</script>

<style lang="scss" scoped>

    .masonry-section {
        // width: $section-width;
        margin: 10px;
        max-width: 100%;
    }
    .theMasonry {
        margin:0 auto;
    }

    .gutter-item {
        width: 10px;
    }
    .workContainer {
        position: relative;
        margin-bottom: 10px;
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
        text-align: center;

    }


    @media screen and (max-width: 600px){
        .overlayTitle{
            top: 30%;
            font-size: 1rem;
        }

    }


  @media screen and (max-width: 900px) {
    .section {
      flex-wrap: wrap;
    }
  }
</style>
