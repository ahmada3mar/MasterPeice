import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Foo from '../components/Foo'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/foo',
        name: 'Foo',
        component: Foo
      },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
  ]
})