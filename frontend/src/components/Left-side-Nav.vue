<template>
	<ul class="nav-item">
		<li class="m-0 mt-1">
			<router-link class="link " to="/admin">
				<div
					v-bind:class="this.$route.path == '/admin' && 'active'"
					class="itemtabe"
				>
					Dashboard
				</div>
			</router-link>
		</li>
		<li class="m-0 mt-1">
			<router-link class="link" to="/admin/trainees">
				<div
					v-bind:class="
						this.$route.path.startsWith('/admin/trainees') && 'active'
					"
					class="itemtabe"
				>
					Manage Trainees
				</div>
			</router-link>
		</li>
		<li class="m-0 mt-1">
			<router-link class="link " to="/admin/admins">
				<div
					v-bind:class="
						this.$route.path.startsWith('/admin/admins') && 'active'
					"
					class="itemtabe"
				>
					Manage Admins
				</div>
			</router-link>
		</li>
		<li class="m-0 mt-1">
			<router-link class="link " to="/admin/contents">
				<div
					v-bind:class="
						this.$route.path.startsWith('/admin/contents') && 'active'
					"
					class="itemtabe"
				>
					Manage Content
				</div>
			</router-link>
		</li>
		<li class="m-0 mt-1">
			<router-link class="link " to="/admin/events">
				<div
					v-bind:class="
						this.$route.path.startsWith('/admin/events') && 'active'
					"
					class="itemtabe"
				>
					Manage Events
				</div>
			</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	name: "Nav",
};
</script>
<style scoped>
.nav-item {
	display: inline-flex;
	flex-direction: column;
	width: 100%;
}

.itemtabe {
	padding: 20px;
	text-align: center;
	width: 100%;
}
.link {
	text-decoration: none;
}
.active {
	background: #161616;
	color: orange;
}
</style>
