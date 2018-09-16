<template>
    <div >
      <!-- <portfolio-sites-masonry /> -->
      <portfolio-sites />
      <portfolio-Projects />
    </div>
</template>

<script>
import PortfolioSites from '@/components/PortfolioSites.vue';
import PortfolioProjects from '../components/PortfolioProjects.vue';
import PortfolioSitesMasonry from '../components/PortfolioSitesMasonry.vue';

export default {
  components: {
    PortfolioSitesMasonry,
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
