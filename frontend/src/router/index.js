import Router from "vue-router";
import Login from "../components/Login";
import Foo from "../components/Foo";
import Admins from "../pages/admin/Admins";
import Events from "../pages/admin/Events";
import Trainees from "../pages/admin/Trainees";
import Dashboard from "../pages/admin/Dashboard";
import Home from "../pages/public/PublicIndex";
import Technologies from "../pages/public/Technologies";
import AboutUs from "../pages/public/AboutUs";
import ContactUs from "../pages/public/ContactUs";
import Content from "../pages/admin/Content";
import EditAdmin from "../pages/admin/EditAdmin"
import EditTrainee from "../pages/admin/EditTrainee"
import Evaluation from "../pages/admin/Evaluations"
import ViewEvaluation from "../pages/admin/ViewEvaluation"
import profileEvaluation from "../pages/trainee/ViewEvaluation"
import EditEvaluation from "../pages/admin/EditEvaluation"
import TraineeHome from "../pages/trainee/home"
import TraineeProfile from "../pages/trainee/Profile"
import Chat from "../pages/chat/index"
import ChatID from "../pages/chat/chat"
import newChat from "../pages/chat/startnewchat"

export default new Router({
	mode: "history",
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: "/admin*",
			name: "Admin",
			component: Foo,
			children: [
				{ path: "/admin/trainees", component: Trainees },
				{ path: "/admin/admins", component: Admins },
				{ path: "/admin/admins/edit/:id", component: EditAdmin },
				{ path: "/admin/trainees/edit/:id", component: EditTrainee },
				{ path: "/admin/trainees/evaluation/:id", component: Evaluation },
				{ path: "/admin/contents", component: Content },
				{ path: "/admin/events", component: Events },
				{ path: "/admin/ViewEvaluation", component: ViewEvaluation },
				{ path: "/admin/ViewEvaluation/edit", component: EditEvaluation },
				{ path: "/", component: Dashboard },
			],
		},
		{
			path: "/trainee",
			name: "trainee",
			component: Foo,
			children: [
				{ path: "/trainee/trainees", component: Trainees },
				{ path: "/trainee/admins", component: Admins },
				{ path: "/trainee/admins/edit/:id", component: EditAdmin },
				{ path: "/trainee/trainees/edit/:id", component: EditTrainee },
				{ path: "/trainee/trainees/evaluation/:id", component: Evaluation },
				{ path: "/trainee/contents", component: Content },
				{ path: "/trainee/events", component: Events },
				{ path: "/trainee/ViewEvaluation", component: profileEvaluation },
				{ path: "/trainee/profile", component: TraineeProfile },
				{ path: "/", component: TraineeHome },
			],
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
			path: "/chat",
			name: "Chat",
			component: Chat,
			children:[{
				path:'/chat/:id',
				name: "ChatID",
			component: ChatID,
			},
			{
				path:'/chat/',
				name: "new",
			component: newChat,
			}]
		},
		{
			path: "/",
			name: "Home",
			component: Home,
		},
	],
});
