<template>
	<div class="card col-4 m-4 ">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
			class="card-img-top "
			alt="technology logo"
		/>
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">
				This is a longer card with supporting text below as a natural lead-in to
				additional content. This content is a little bit longer.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cards",
	data() {
		return {};
	},
};
</script>

<style scoped>
.card-img-top {
	width: 70%;
}
.card {
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 15px;
	height: fit-content;
	padding: 10px;
}

.card:nth-child(even) {
	margin-top: 6rem !important;
}
</style>
