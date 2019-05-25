import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './app.vue';
import Index from './index/index.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { 
          path: '/', component: Index
        }
    ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});