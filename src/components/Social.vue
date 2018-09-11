<template>
    <div>
          <a v-for="x in social" :key="x.icon[1]" :href="x.link" target="blank">
            <font-awesome-icon :icon='x.icon' />
          </a>
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

</style>
