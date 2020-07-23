import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Spells from "./components/Spells";
import Spell from "./components/Spell";
import Monster from "./components/Monster";
import Monsters from "./components/Monsters";

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


const router = new VueRouter({
  routes: [
    {
      path: '/spells', component: Spells,
    },
    {
      path: '/spells/:name', component: Spell
    },
    {
      path: '/monsters', component: Monsters,
    },
    {
      path: '/monsters/:name', component: Monster,
    },
  ]
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

