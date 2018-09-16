<template>
    <div class="app-display">
        <p data-height="600" data-theme-id="0" :data-slug-hash="curApp.dataSlugHash" data-default-tab="result" data-user="galexynye"
          :data-pen-title="curApp.title" class="codepen">
        Check out
        <a :href="curApp.href" target="blank">
          {{curApp.title}} on Codepen </a>
            <!-- by Alex Nye (<a href="https://codepen.io/galexynye">@galexynye</a>) -->
         </p>
    </div>
</template>

<script>
export default {
  props: {
    curApp: Object,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: $primary;
}

.app-display p{
  height: 100vh;
}

</style>
