import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/teacher/pages/home/home.vue'], resolve);
const Welcome = resolve => require(['@/teacher/pages/home/welcome.vue'], resolve);

import HelloWorld from '@/teacher/components/HelloWorld'

Vue.use(Router)

export default new Router({
	// mode:'history',
  	routes: [
    	{
          	path: '/',
          	name: 'home',
          	component: Home,
            children:[
              {
                path: '/',
                name: 'welcome',
                component: Welcome
              }
            ]
    	},
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      }
  	]
})
