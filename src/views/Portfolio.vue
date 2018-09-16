<template>
    <div >
      <!-- <portfolio-sites-masonry /> -->
      <portfolio-sites />
      <portfolio-apps />
    </div>
</template>

<script>
import PortfolioSites from '../components/PortfolioSites.vue';
import PortfolioApps from '../components/PortfolioApps.vue';
import PortfolioSitesMasonry from '../components/PortfolioSitesMasonry.vue';

export default {
  components: {
    PortfolioSitesMasonry,
    PortfolioSites,
    PortfolioApps,
  },
  data() {
    return {

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


</style>
