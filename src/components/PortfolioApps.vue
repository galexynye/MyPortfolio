<template>
  <div >
    <div class="section">
      <h2 class="section-solo section-title">Apps</h2>
    </div>
    <div class="section">
      <div class="section-column">
         <ul >
          <li v-for="work in apps" :key="work.title">
            <button @click="previewProj(work)">{{work.title}}</button>
          </li>
        </ul>
        <p>Description of apps</p>
      </div>
      <div class="section-column">
        <div class="app-display">
          <p v-if="!loadedProj">Loading...</p>
          <iframe height='600' @load="load" scrolling='no' :title='curApp.title' :src="`//codepen.io/galexynye/embed/${curApp.dataSlugHash}/?height=600&theme-id=0&default-tab=result&embed-version=2`" frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>


          <!-- <p data-height="600" data-theme-id="0" :data-slug-hash="curApp.dataSlugHash" data-default-tab="result" data-user="galexynye"
            :data-pen-title="curApp.title" class="codepen">
            Check out
          <a :href="curApp.href" target="blank">
          {{curApp.title}} on Codepen </a> -->
            <!-- by Alex Nye (<a href="https://codepen.io/galexynye">@galexynye</a>) -->
         <!-- </p> -->
        </div>

        <!-- <portfolio-app-display :curApp="curApp"/> -->
    </div>

    </div>
    <div class="section">

    </div>
  </div>
  <!-- <div>f
    <div class="section">
      <h2 class="section-column">Apps</h2>
    </div>
    <div id="apps" class="section">
    <div class="section-column">
      <ul>
        <li v-for="work in apps" :key="work.title">
          <a href="#0" >{{work.title}}</a>
        </li>
      </ul>
    </div>
    <div class="section-column">
      <portfolio-app-display :curApp="curApp"/>
    </div>
    </div>
    </div> -->
</template>

<script>
import PortfolioAppDisplay from './PortfolioAppDisplay.vue';

export default {
  components: {
    PortfolioAppDisplay,
  },
  data() {
    return {
      loadedProj: false,
      curApp: {
        title: 'Markdown Previewer',
        dataSlugHash: 'bxaoRo',
        href: 'https://codepen.io/galexynye/pen/mGMKYz/',
      },
      apps: [
        {
          title: 'Markdown Previewer',
          dataSlugHash: 'bxaoRo',
          href: 'https://codepen.io/galexynye/pen/mGMKYz/',
        },
        {
          title: 'Simon',
          dataSlugHash: 'NYKRby',
          href: 'https://codepen.io/galexynye/pen/NYKRby/',
        },
        {
          title: 'Drum Machine',
          dataSlugHash: 'mGMKYz',
          href: 'https://codepen.io/galexynye/pen/mGMKYz/',
        },
        {
          title: 'Tic-Tac-Toe',
          dataSlugHash: 'QQoJQo',
          href: 'https://codepen.io/galexynye/pen/QQoJQo/',
        },
        // {
        //   title: '70s Wikipedia Searcher',
        //   dataSlugHash: 'Vrjowv',
        //   href: 'https://codepen.io/galexynye/pen/Vrjowv/',
        // },
        {
          title: 'Twitch Checker',
          dataSlugHash: 'pdNwEb',
          href: 'https://codepen.io/galexynye/pen/pdNwEb/',
        },
        // {
        //   title: 'Vue Calculator',
        //   dataSlugHash: 'rJYqeX',
        //   href: 'https://codepen.io/galexynye/pen/rJYqeX/',
        // },
        // {
        //   title: 'Vue Pomodoro',
        //   dataSlugHash: 'PQaQYv',
        //   href: 'https://codepen.io/galexynye/pen/PQaQYv/',
        // },
      ],
    };
  },
  methods: {
    previewProj(x) {
      // document.getElementById('apps').innerHTML();
      if (this.curApp.title !== x.title) {
        this.loadedProj = false;
      }

      this.curApp = x;

      // console.log(this.curApp.title);
    },
    load() {
      this.loadedProj = true;
    },
  },
};

</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
    .section {
      flex-wrap: wrap;
    }
    .section-column {
      margin: 10px;
      width: 100%;
    }
  }
</style>
