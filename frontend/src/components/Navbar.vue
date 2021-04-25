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
					<router-link class="nav-link active" to="/" aria-current="page">
						Home <span class="sr-only">(current)</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="Technologies">
						Technologies
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="AboutUs">
						About Us
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="ContactUs">
						Contact Us
					</router-link>
				</li>
			</ul>
			<form class="form-inline">
				<button class="btn btn-secondary btn-inverse" type="button">
					Sign In
				</button>
			</form>
		</div>
	</nav>
</template>

<script>
import { store } from "../store/store";

export default {
	name: "Navbar",
	data() {
		return {
			store: store,
		};
	},
};
</script>
