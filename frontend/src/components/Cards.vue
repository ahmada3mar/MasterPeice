<template>
	<div class="card col-4 m-4 ">
		<img :src="img" class="card-img-top " alt="technology logo" />
		<div class="card-body">
			<h4 class="card-title">{{ title }}</h4>
			<p class="card-text">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cards",
	props: ["img", "title", "description"],
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
