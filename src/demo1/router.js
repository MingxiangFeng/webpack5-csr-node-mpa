import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/demo1/',
  routes: [
    {
      name: 'home',
      component: () => import('./home.vue'),
      path: '/'
    },
    {
      name: 'detail',
      component: () => import('./detail.vue'),
      path: '/detail'
    },
  ]
})
