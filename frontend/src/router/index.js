
import Router from 'vue-router'
import Login from '../components/Login'
import Foo from '../components/Foo'
import Trainees from "../pages/home/Index"
import Dashboard from "../pages/home/Dashboard"
import Home from "../pages/home/public/index"
import Admins from "../pages/admin/Admins"
import Events from "../pages/admin/Events"
// import Navbar from "../components/Navbar"




export default new Router({
  routes: [
      {
        path: '/admin*',
        name: 'Admin',
        component: Foo,
        children: [
          { path: '/admin/trainees',
           component: Trainees ,
          },
          { path: '/admin/admins',
           component: Admins ,
          },
          { path: '/admin/contents',
           component: Trainees ,
          },
          { path: '/admin/events',
           component: Events ,
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