import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCompactDisc, faShoppingCart, faAngleLeft, faAngleRight, faBars, faTimes, faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faGithub, faCodepen, faFreeCodeCamp, faImdb, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faCompactDisc, faShoppingCart, faAngleLeft, faAngleRight, faBars, faTimes,
  faTimesCircle, faInfoCircle, faVuejs, faGithub, faCodepen, faFreeCodeCamp, faImdb,
  faYoutube,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
