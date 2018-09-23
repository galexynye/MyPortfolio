<template>
    <div class="subject">
        <div class="section">
            <h2 class="section-solo section-title">Websites</h2>

        </div>
        <div class="section">
                <div class="workContainer section-column">
                    <img :src="portfolio[0].image" alt="">
                    <div class='overlay' :style="{'background-color': portfolio[0].color}">
                        <h2 class="overlayTitle">{{portfolio[0].title}}</h2>
                        <p class="overlayCaption">{{portfolio[0].caption}}</p>
                    </div>
                </div>
                <div class="workContainer section-column">
                    <img :src="portfolio[1].image" alt="">
                    <div class='overlay' :style="{'background-color': portfolio[1].color}">
                        <h2 class="overlayTitle">{{portfolio[1].title}}</h2>
                        <p class="overlayCaption">{{portfolio[1].caption}}</p>
                    </div>
                </div>
        </div>
        <!-- <div class="section">
                <div class="workContainer section-column">
                    <img :src="portfolio[1].image" alt="">
                    <div class='overlay' :style="{'background-color': portfolio[1].color}">
                        <h2 class="overlayTitle">{{portfolio[1].title}}</h2>
                        <p class="overlayCaption">{{portfolio[1].caption}}</p>
                    </div>
                </div>
                <div class="workContainer section-column">
                    <img :src="portfolio[2].image" alt="">
                    <div class='overlay' :style="{'background-color': portfolio[2].color}">
                        <h2 class="overlayTitle">{{portfolio[2].title}}</h2>
                        <p class="overlayCaption">{{portfolio[2].caption}}</p>
                    </div>
                </div>
        </div> -->
        <!-- <div id="websites" class="section">
            <div class="workContainer section-column" v-for="work in portfolio" :key="work.title" >
            <img :src="work.image" alt="">
                <div class='overlay' :style="{'background-color': work.color}">
                    <h2 class="overlayTitle">{{work.title}}</h2>
                    <p class="overlayCaption">{{work.caption}}</p>
                </div>
            </div>
        </div> -->
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
          caption: 'A blog about music production made with Gatsby.js/React and deployed with CI via Github and Netifly.',
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
};

</script>

<style lang="scss" scoped>


    .workContainer {
        position: relative;
    }

    img {
        display: block;
        max-width: 100%;
        opacity: .8;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        max-width: 100%;
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


    @media screen and (max-width: 900px){
        .overlayTitle{
            top: 30%;
            font-size: 1rem;
        }

    }


  @media screen and (max-width: 700px) {
    .section {
      flex-wrap: wrap;
    }
    .section-column {
      margin: 10px;
      width: 100%;
    }
  }


</style>
