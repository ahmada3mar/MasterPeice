<template>
	<div>
		<div class="bodyfull d-flex flex-column flex-grow-1">
			<Navbar />
			<router-view></router-view>
			<Footer />
		</div>
	</div>
</template>

<script>
// import Login from './components/Login.vue'

import { store } from "./store/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default {
	name: "App",
	data() {
		return {
			store: store,
		};
	},
	components: { Navbar, Footer },
};
</script>

<style>
.bodyfull {
	height: 100vh;
}
</style>
