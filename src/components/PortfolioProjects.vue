<template>
<div class="subject">
    <div class="section">
        <h2 class="section-solo section-title">Web Projects</h2>
    </div>
    <div class="section">
        <div class="section-column__flex">
            <ul>
                <li v-for="work in projects" :key="work.title">
                    <a @click="previewProj(work)">{{work.title}}</a>
                </li>
            </ul>
        </div>
        <!-- <div class="section-column">
            <div class="project-display">
                <p v-if="!loadedProj">Loading...</p>
                <iframe  @load="load" scrolling='no' :title='curProject.title' :src="`//codepen.io/galexynye/embed/${curProject.dataSlugHash}/?height=600&theme-id=0&default-tab=result&embed-version=2`" frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>
            </div>
        </div> -->
        <div class="section-column">
             <div class="project-description animated">
                <h1>{{curProject.title}}</h1>
                    <div class="project-description-details">
                         <div class="project-description-about">
                            <p>{{curProject.description}}</p>
                            <a :href="curProject.href" target="blank">View on Codepen</a>
                        </div>
                        <div class="project-description-tech">
                            <h3>Made with</h3>
                            <ul>
                                <li v-for="(icon, index) in curProject.techIcons" :key="index">
                                    <font-awesome-icon :icon='icon[0]' size="3x" :style="{color: icon[1]}" />
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import PortfolioprojectDisplay from './PortfolioprojectDisplay.vue';

export default {
  components: {
    // PortfolioprojectDisplay,
  },
  data() {
    return {
      loadedProj: false,
      curProject: {
        title: 'Interactive Name',
        dataSlugHash: 'bxaoRo',
        href: 'https://codepen.io/galexynye/pen/VGobxX',
        techIcons: [[['fab', 'js'], '#f5de19']],
        description: `Creating interactive content on an html <canvas> was something I wanted to do for a 
        long time. I wrote my name to explode when hovered over by the mouse. By adding scale and position to the custom 
        classes I used to make the letters I was able to make the animation responsive too. Scroll up to check it out.
        `,
      },
      projects: [
        {
          title: 'Interactive Name',
          dataSlugHash: 'bxaoRo',
          href: 'https://codepen.io/galexynye/pen/VGobxX',
          techIcons: [[['fab', 'js'], '#f5de19']],
          description: `Creating interactive content on an html <canvas> was something I wanted to do for a 
        long time. I wrote my name to explode when hovered over by the mouse. By adding scale and position to the custom 
        classes I used to make the letters I was able to make the animation responsive too. Scroll up to check it out.
        `,
        },
        {
          title: 'Markdown Previewer',
          dataSlugHash: 'bxaoRo',
          href: 'https://codepen.io/galexynye/pen/bxaoRo/',
          techIcons: [[['fab', 'react'], '#61dafb'], [['fab', 'sass'], '#cf649a']],
          description: `Building a Markdown previewer was the last project I did to earn my FCC Front-End Libraries certificate. 
        Before I started building it I had a moment where I realized I already knew exactly where to start and what to code, it was just a matter of doing it. I knew
        there'd probably be some questions, but I knew I'd find the answers. 
        `,
        },
        {
          title: 'Drum Machine',
          dataSlugHash: 'mGMKYz',
          techIcons: [[['fab', 'react'], '#61dafb'], [['fab', 'sass'], '#cf649a']],
          href: 'https://codepen.io/galexynye/pen/mGMKYz/',
          description: `As a musician, my number one goal in building this drum 
          machine was to have NO LATENCY, or as little as possible, so it would actually be playable.
          Using SoundJS (a part of CreateJS) I was able to achieve satisfying results. I can play a beat on 
          my keyboard :) 

          `,
        },
        {
          title: 'Simon',
          dataSlugHash: 'NYKRby',
          techIcons: [[['fab', 'vuejs'], '#4dba87']],
          href: 'https://codepen.io/galexynye/pen/NYKRby/',
          description: `The difficulty/fun in building this classic Simon Game was creating the look of 
          the game with CSS. I still find the way the game gets backlit with colors so satisfying.`,
        },

        {
          title: 'Tic-Tac-Toe',
          dataSlugHash: 'QQoJQo',
          techIcons: [[['fab', 'js'], '#f5de19']],
          href: 'https://codepen.io/galexynye/pen/QQoJQo/',
          description: `I made the fortunate mistake of not researching an algorithm to help build
          an unbeatable tic-tac-toe "AI". My solution isn't elegant, or pretty, but I built this game in order to learn and 
          I learned so much more by creating my own algorithm rather than implementing someone else's. 
          This project was also very enlightning because it was the first time I used pure Vanilla Javascript 
          to do the job. It was way more enjoyable than I antcipated, still, I'd rather use Vue or React.
          `,
        },
        // {
        //   title: '70s Wikipedia Searcher',
        //   dataSlugHash: 'Vrjowv',
        //   href: 'https://codepen.io/galexynye/pen/Vrjowv/',
        // },
        {
          title: 'Twitch Checker',
          dataSlugHash: 'pdNwEb',
          techIcons: [[['fab', 'js'], '#f5de19']],
          href: 'https://codepen.io/galexynye/pen/pdNwEb/',
          description: `This was one of the first projects I built using jQuery and ajax requests. 
          It uses the Twitch api to check if users are online or not. I still find the design and animations
          satisfying.   
        `,
        },
        // {
        //   title: 'Vue Calculator',
        //   dataSlugHash: 'rJYqeX',
        //   href: 'https://codepen.io/galexynye/pen/rJYqeX/',
        // },
        // {
        //   title: 'Vue Pomodoro',
        //   dataSlugHash: 'PQaQYv',
        //   techIcons: [[['fab', 'vuejs'], '#4dba87']],
        //   href: 'https://codepen.io/galexynye/pen/PQaQYv/',
        //   description: `Building this Pomodoro was a done as a part of my
        //   Free Code Camp Front End Developer Certificate. The project helped solidfy my knowledge
        //   of programming with time and callbacks.`,
        // },
      ],
    };
  },
  methods: {
    previewProj(x) {
      // document.getElementById('projects').innerHTML();
      if (this.curProject.title !== x.title) {
        this.loadedProj = false;
      }

      this.curProject = x;

      // console.log(this.curProject.title);
    },
    load() {
      this.loadedProj = true;
    },
  },
};

</script>

<style lang="scss" scoped>

    // $height-tall: 600px;

    h1 {
      color: $primary;
      margin-top: 0px;
    //   text-decoration: underline;
    }

    // iframe {
    //   height: $height-tall;
    // }

    ul {
        list-style: none;
        display: flex;
        flex-flow: wrap;
        // margin-right: 30px;
        margin-bottom: 20px;
    }

    li {
        a{
            display: flex;
            justify-content: space-between;
            border: none;
            font-size: 1.5rem;
            height: 60px;
            width: 260px;
            margin-bottom: 10px;
            font-family: $primary-font;

            &:hover {
                 color: $accent;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

    .project-description-details {
        // min-height: 300px;
        p {
            margin-bottom: 10px;
        }
        a {
            color: $primary;
        }
    }

    .project-description-tech {
        ul {
            display: flex;
            // flex-flow: column;
        }
        li {
            padding: 5px 20px 10px 0px;
        }
        h3 {
            margin-top: 10px;
            color: $text;
        }
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
