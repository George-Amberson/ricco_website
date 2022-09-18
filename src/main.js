import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import comments from './components/comment'
import pizzalist from './components/pizzaslist'
const routes =[
  {
    path:'/clientscomment',
    component: comments
  },
  {
  path: '/',
  component: pizzalist
  }

]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
