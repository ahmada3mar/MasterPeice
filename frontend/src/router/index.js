
import Router from 'vue-router'
import Login from '../components/Login'
import Foo from '../components/Foo'
import Admins from "../pages/admin/Admins"
import Events from "../pages/admin/Events"
// import Navbar from "../components/Navbar"
import Trainees from "../pages/admin/Trainees";
import Dashboard from "../pages/admin/Dashboard";
import Home from "../pages/public/PublicIndex";
import Technologies from "../pages/public/Technologies";
import AboutUs from "../pages/public/AboutUs";
import ContactUs from "../pages/public/ContactUs";
import Content from "../pages/admin/Content"




export default new Router({
  mode: "history",
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
           component: Content ,
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
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/Technologies",
        name: "Technologies",
        component: Technologies,
      },
      {
        path: "/AboutUs",
        name: "AboutUs",
        component: AboutUs,
      },
      {
        path: "/ContactUs",
        name: "ContactUs",
        component: ContactUs,
      },
      {
        path: "/",
        name: "Home",
        component: Home,
      },
    
  ]
})