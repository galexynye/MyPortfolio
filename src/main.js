import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCompactDisc, faShoppingCart, faAngleLeft, faAngleRight, faBars, faTimes, faTimesCircle, faInfoCircle, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faReact, faSass, faGithub, faCodepen, faFreeCodeCamp, faImdb, faYoutube, faJs, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faCompactDisc, faShoppingCart, faAngleDown, faAngleUp, faAngleLeft, faAngleRight, faBars, faTimes,
  faTimesCircle, faInfoCircle, faVuejs, faReact, faSass, faGithub, faCodepen, faFreeCodeCamp, faImdb,
  faYoutube, faJs, faInstagram,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
