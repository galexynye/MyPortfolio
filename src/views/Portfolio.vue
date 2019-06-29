<template>
    <div id="projects">
      <!-- <portfolio-sites-masonry /> -->
      <portfolio-sites />
      <!-- <portfolio-Projects /> -->
    </div>
</template>

<script>
import PortfolioSites from '@/components/PortfolioSites.vue';
import PortfolioProjects from '../components/PortfolioProjects.vue';

export default {
  components: {
    PortfolioSites,
    PortfolioProjects,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>


</style>
