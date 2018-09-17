<template>
    <div class="social">
        <a href="mailto:g.alexander.nye@gmail.com">g.alexander.nye@gmail.com</a>
        <div>
            <a v-for="x in social" :key="x.icon[1]" :href="x.link" target="blank">
                <font-awesome-icon :icon='x.icon' size="lg" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: ['fab', 'github'],
          link: 'https://github.com/galexynye',
        },
        {
          icon: ['fab', 'codepen'],
          link: 'https://codepen.io/galexynye/#',
        },
        {
          icon: ['fab', 'free-code-camp'],
          link: 'https://www.freecodecamp.org/galexynye',
        },
        {
          icon: ['fab', 'youtube'],
          link: 'https://www.youtube.com/channel/UCRh5xwjVbFb0PI9JKOeZAIg',
        },
        {
          icon: ['fab', 'imdb'],
          link: 'http://www.imdb.com/name/nm5637976/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .social{
    padding: 20px;
    display: flex;
    flex-flow: column;

    background-color: $dark-background;
    a {
      margin: 10px;
      color: $dark-text;
      &:hover {
          color: $accent;
      }
    }
  }

</style>
