// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import vueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'
import App from './App'

import Common from './js/rock'
import URL from './constants/URL';

// mock 引用
require('./utils/mock.js');

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(Vuex);

// url变量挂载到全局
Vue.prototype.$URL = URL;

Common.autoSize();
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
