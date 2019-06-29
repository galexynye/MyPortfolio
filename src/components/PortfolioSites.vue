<template>
    <div class="subject">
        <div class="section">
            <h2 class="section-solo section-title">Click to Visit a Project Sites</h2>
        </div>
        <div class="section">
                <div class="workContainer section-column">
                    <!-- <a href="http://grimmforestmusic.com.s3-website-us-east-1.amazonaws.com" target="blank"><img :src="portfolio[0].image" alt=""> -->
                    <a href="http://www.grimmforestmusic.com"><img :src="portfolio[0].image" alt="">
                        <div class='overlay' :style="{'background-color': portfolio[0].color}">
                            <h2 class="overlayTitle">{{portfolio[0].title}}</h2>
                            <p class="overlayCaption">{{portfolio[0].caption}}</p>
                        </div>
                    </a>
                </div>
                <div class="workContainer section-column">
                    <a href="https://www.musicsequencing.com/">
                        <img :src="portfolio[1].image" alt="">
                        <div class='overlay' :style="{'background-color': portfolio[1].color}">
                            <h2 class="overlayTitle">{{portfolio[1].title}}</h2>
                            <p class="overlayCaption">{{portfolio[1].caption}}</p>
                        </div>
                    </a>
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
          title: 'Grimm Forest Music',
          image: require('../assets/WebSites/GFM/GFM_WhiteTree_809x500.png'),
          caption: 'My commercial studio website.',
          color: '#11191b',
        },
        {
          title: 'Music Sequencing',
          image: require('../assets/WebSites/MS/MS_809x500_LogoRainbow.png'),
          caption: 'A blog about music production.',
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
        opacity: .95;
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
        max-height: 50%;
    }

    @media screen and (max-width: 1100px){
        .overlayTitle{
            font-size: 1.5rem;
        }
        .overlayCaption{
            display: none;
        }

    }


</style>
