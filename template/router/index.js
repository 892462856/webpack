import Vue from 'vue'
import Router from 'vue-router'

import '../imports/css/index.css'
import components from '../imports/js/index'
Vue.use(components)

import main from '../examples/main'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'main',
      component: main
    } */
  ]
})
