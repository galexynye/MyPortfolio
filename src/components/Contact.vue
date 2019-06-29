<template>
    <div id="contact" class="subject">
        <div class="section">
            <h2 class="section-solo section-title">Contact</h2>
        </div>
        <div class="section">
            <div class="section-column contact-email">
                <!-- <h2 class="contact-title">Say hi :)</h2> -->
                <p>Happy to hear from people looking for original music, a producer, lessons or those who just want to say hi. Email me <a href="mailto:alex@grimmforestmusic.com?Subject=Hello%20again">alex@grimmforestmusic.com</a>
                </p>
                <a href="mailto:alex@grimmforestmusic.com?Subject=Hello%20again"></a>
            </div>
            <!-- <div class="section-column social">
                <h2 class="contact-title">Social</h2>
                <ul>
                    <li v-for="links in social" :key="links.icon[1]"><a :href="links.link">{{links.name}}</a></li>
                </ul>
            </div> -->
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          name: 'Github',
          icon: ['fab', 'github'],
          link: 'https://github.com/galexynye',
        },
        {
          name: 'Codepen',
          icon: ['fab', 'codepen'],
          link: 'https://codepen.io/galexynye/#',
        },
        {
          name: 'Free Code Camp',
          icon: ['fab', 'free-code-camp'],
          link: 'https://www.freecodecamp.org/galexynye',
        },
        {
          name: 'Youtube',
          icon: ['fab', 'youtube'],
          link: 'https://www.youtube.com/channel/UCRh5xwjVbFb0PI9JKOeZAIg',
        },
        {
          name: 'IMDB',
          icon: ['fab', 'imdb'],
          link: 'http://www.imdb.com/name/nm5637976/',
        },
      ],

    };
  },
};
</script>

<style lang="scss" scoped>

    .contact-title {
        color: $primary;
    }

    .contact-email {
        font-size: 1.2rem;
        a {
            color: $primary;
                 &:hover {
                    color: $accent;
                }
            }
    }

    .social{
        font-size: 1.3rem;
        li {
            padding: 10px 0px;
            a {
                 &:hover {
                    color: $accent;
                }
            }

        }

    }

</style>
