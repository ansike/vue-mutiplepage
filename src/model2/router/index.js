import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/model2/components/HelloWorld'
import Home from '@/model2/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
