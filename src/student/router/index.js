import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/student/components/HelloWorld'
import Home from '@/student/pages/home/home'

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
