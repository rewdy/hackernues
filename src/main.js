import Vue from 'vue';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import App from './App.vue';
import router from './router';
import Loader from '@/components/TheLoader.vue';


import '@/assets/scss/style.scss';
import '@/assets/fonts/inter/font.css';

Vue.config.productionTip = false;

Vue.component('Loader', Loader);

// Create 'axios-cache-adapter'
const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 minutes
});

Vue.prototype.$http = axios.create({
  adapter: cache.adapter,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
