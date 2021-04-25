<template>
<<<<<<< HEAD
	<div class="homcontainer d-flex">
		<div class="left-sidedashboard bg-secondary">
			<Nav />
		</div>
		<div class="content">
			<router-view />
		</div>
	</div>
=======
<div class="homcontainer d-flex  mx-0 p-0">
<div class="left-sidedashboard bg-secondary col-2">
 <Nav/>
</div>
<div style="background:#f2f2f2"  class="content col-10">
  
   <router-view/>
</div>
</div>
>>>>>>> 968399f15ce65f7310a6db9cc853e6156d2ae79c
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

<style scoped>
<<<<<<< HEAD
.left-sidedashboard {
	/* height: 100%; */
	width: 15vw;
}
.incontent {
	display: inline-flex;
	flex-direction: column;
	width: 100%;
}
.content {
	flex-grow: 1;
	height: 100%;
}

.homcontainer {
	flex-grow: 1;
}
=======



>>>>>>> 968399f15ce65f7310a6db9cc853e6156d2ae79c
</style>
