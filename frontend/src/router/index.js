import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Foo from "../components/Foo";
import Trainees from "../pages/admin/Trainees";
import Dashboard from "../pages/admin/Dashboard";
import Home from "../pages/public/PublicIndex";
import Technologies from "../pages/public/Technologies";
import AboutUs from "../pages/public/AboutUs";
import ContactUs from "../pages/public/ContactUs";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/admin*",
			name: "Admin",
			component: Foo,
			children: [
				{ path: "/admin/trainees", component: Trainees },
				{ path: "/admin/admins", component: Trainees },
				{ path: "/admin/contents", component: Trainees },
				{ path: "/admin/events", component: Trainees },
				{ path: "/", component: Dashboard },
			],
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
		},
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/technologies",
			name: "Technologies",
			component: Technologies,
		},
		{
			path: "/aboutUs",
			name: "AboutUs",
			component: AboutUs,
		},
		{
			path: "/contactUs",
			name: "ContactUs",
			component: ContactUs,
		},
	],
});
