import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

import {
    state,
    getters,
    mutations,
    actions
} from './store'

Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')