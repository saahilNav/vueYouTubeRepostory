import Vue from 'vue'
import App from './App.vue'
import store from './store'
import mybuddies from './components/mybuddies.vue'
import addbuddylist from './components/addbuddylist.vue'
import blockList from './components/blockList.vue'
import BootstrapVue from "bootstrap-vue"

import optionItem from './components/optionItem.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.config.productionTip = false
import 'vue-awesome/icons'

import axios from 'axios'
Vue.use(BootstrapVue)

Vue.use(axios)
Vue.use(VueRouter)
Vue.use(Vuex);
export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: mybuddies },
    { path: '/mybuddies', component: mybuddies },
    { path: '/addBuddy', component: addbuddylist },
    { path: '/optioSelect', component: optionItem },
    { path: '/block', component: blockList }
  ]
});
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

