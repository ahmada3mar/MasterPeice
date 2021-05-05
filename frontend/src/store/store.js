import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const UPDATE_USERS = "UPDATE_USERS";
export const store = new Vuex.Store({
	state: {
		user: {},
		loading: true,
		users: [],
		contents: [],
		events: [],
		evaluation: "",
	},
	mutations: {
		[UPDATE_USERS](state, users) {
			console.log("mutate users", users);
			state.users = users;
			console.log(state);
		},
	},
	getters: {
		user(state) {
			return state.users;
		},
	},
});
