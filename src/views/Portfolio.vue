<template>
    <div id="portfolio" class="section">
        <div class="workContainer" v-for="work in portfolio" :key="work.title" >
            <portfolio-web-display :work="work" :bgColor="work.color"/>
        </div>
        <div>
            <p data-height="265" data-theme-id="0" data-slug-hash="mGMKYz" data-default-tab="result" data-user="galexynye" data-pen-title="Drum Machine in React (low latency)" class="codepen">See the Pen <a href="https://codepen.io/galexynye/pen/mGMKYz/">Drum Machine in React (low latency)</a> by Alex Nye (<a href="https://codepen.io/galexynye">@galexynye</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            <p data-height="265" data-theme-id="0" data-slug-hash="bxaoRo" data-default-tab="result" data-user="galexynye" data-pen-title=" Mark Down Previewer in React" class="codepen">See the Pen <a href="https://codepen.io/galexynye/pen/bxaoRo/"> Mark Down Previewer in React</a> by Alex Nye (<a href="https://codepen.io/galexynye">@galexynye</a>) on <a href="https://codepen.io">CodePen</a>.</p>

        </div>
    </div>
</template>

<script>
import PortfolioWebDisplay from '../components/PortfolioWebDisplay.vue';

export default {
  components: {
    PortfolioWebDisplay,
  },
  data() {
    return {
      portfolio: [
        {
          title: 'Grimm Forest',
          image: require('../assets/WebSites/GFM/GFM_WhiteTree_809x500.png'),
          caption: 'A Music website with a searchable playlist made with VueJs and AWS for the backend.\n \n Work in progress.',
          color: '#11191b',
        },
        {
          title: 'Midi Sequencing',
          image: require('../assets/WebSites/MS/MS_809x500_LogoRainbow.png'),
          caption: 'A site that teaches music production made with Gatsby.js and deployed with CI via Github and Netifly.',
          color: '#fbd703',
        },
      ],
      apps: [
        {
          title: 'Drum Machine(Low Latency)',
          dataSlugHash: 'mGMKYz',
          href: 'https://codepen.io/galexynye/pen/mGMKYz/',
        },
        {
          title: 'Midi Sequencing',
          image: require('../assets/WebSites/MS/MS_809x500_LogoRainbow.png'),
          caption: 'A site that teaches music production made with Gatsby.js and deployed with CI via Github and Netifly.',
          color: '#fbd703',
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

    $workWidth: 800px;

    #portfolio {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
    }

     .workContainer {
        position: relative;
        margin: 6px;
        width: $workWidth;

    }

</style>
