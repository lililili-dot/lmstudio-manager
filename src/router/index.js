import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Manager from '@/views/manager'
import add from '@/views/add'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manager',
      component: Manager
    }
  ]
})
