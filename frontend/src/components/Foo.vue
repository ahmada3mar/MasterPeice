<template>
	<div class="homcontainer d-flex  mx-0 p-0">
		<div v-if="this.store.state.user.is_admin" class="left-sidedashboard bg-secondary col-2">
			<Nav />
		</div>
		<div v-bind:class="!this.store.state.user.is_admin ? 'col-12' : null" style="background:#f2f2f2" class="content col-10">
			<router-view />
		</div>
	</div>
</template>

<script>
import { store } from "../store/store.js";
import Nav from "../components/Left-side-Nav";

export default {
	name: "Foo",

	data() {
		return {
			store: store,
			data: "",
		};
	},
	mounted: function() {
		!this.store.state.user.id ? this.$router.push("/login") : null;
	},
	components: {
		Nav,
	},
};
</script>

<style scoped></style>
