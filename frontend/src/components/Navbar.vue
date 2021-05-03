<template>
	<nav
		v-if="this.$route.path != '/login'"
		role="navigation"
		class="navbar navbar-expand-lg navbar-dark px-4"
	>
		<router-link class="navbar-brand" to="/">
			<img src="../assets/orange_logo.svg" alt="Orange Logo" />
		</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<!-- Boosted mod: active class on link -->
					<router-link class="nav-link " v-bind:class="this.$route.path=='/' && 'active' " to="/" aria-current="page">
						Home <span class="sr-only">(current)</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link"  v-bind:class="this.$route.path=='/Technologies' && 'active' " to="/Technologies">
						Technologies
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link"  v-bind:class="this.$route.path=='/AboutUs' && 'active' " to="/AboutUs">
						About Us
					</router-link>
				</li>
				<li class="nav-item">
					<router-link v-bind:class="this.$route.path=='/ContactUs' && 'active' " class="nav-link" to="/ContactUs">
						Contact Us
					</router-link>
				</li>
				<li v-if="store.state.user.is_admin == 0 " class="nav-item">
					<router-link v-bind:class="this.$route.path=='/trainee/profile' && 'active' " class="nav-link" to="/trainee/profile">
						Profile
					</router-link>
				</li>
			</ul>
			<form class="form-inline">
				<router-link to="/chat" class=" mx-1">
				<i  class="nav-link nav-icon icon svg-mail m-0 p-0"/>
			</router-link >
			<router-link class=" mx-1" to="/login">
				<i  class="nav-link nav-icon svg-avatar m-0 p-0"/>					
				</router-link>
				<div @click="logout" v-if="store.state.user.id " class="btn btn-secondary btn-inverse mx-1" >
				Logout
					
				</div>
			</form>
		</div>
	</nav>
</template>

<script>
import axios from 'axios';
import { store } from "../store/store";

export default {
	name: "Navbar",
	data() {
		return {
			store: store,
		};
	},
	methods:{
		logout(){
			axios.post('http://localhost:8000/logout')
			.then(()=>{
				store.state.user = {} ;
				this.$router.push('/')
			})
		}
	}
};
</script>
<style >
	.svg-mail::after , .svg-avatar::after{
		height: 2.25rem;
		width: 2.25rem;
	}
</style>
