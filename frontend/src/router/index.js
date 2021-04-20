import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Foo from '../components/Foo'
import Home from "../pages/home/Index"
import Dashboard from "../pages/home/Dashboard"
// import Navbar from "../components/Navbar"


Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/admin*',
        name: 'Admin',
        component: Foo,
        children: [
          { path: '/admin/trainees',
           component: Home ,
          },
          { path: '/admin/admins',
           component: Home ,
          },
          { path: '/admin/contents',
           component: Home ,
          },
          { path: '/admin/events',
           component: Home ,
          },
          { path: '/',
           component: Dashboard ,
          },
        
        ]
      },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
  ]
})