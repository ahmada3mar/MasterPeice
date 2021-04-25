<template>
	<div class="row row-cols-1 row-cols-md-2 m-0">
		<div class="col mb-4">
			<div class="card">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
					class="card-img-top "
					alt="technology logo"
				/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a longer card with supporting text below as a natural
						lead-in to additional content. This content is a little bit longer.
					</p>
				</div>
			</div>
		</div>
		<div class="col mb-4">
			<div class="card">
				<img src="#" class="card-img-top " alt="#" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a longer card with supporting text below as a natural
						lead-in to additional content. This content is a little bit longer.
					</p>
				</div>
			</div>
		</div>
		<div class="col mb-4">
			<div class="card">
				<img src="#" class="card-img-top" alt="#" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a longer card with supporting text below as a natural
						lead-in to additional content.
					</p>
				</div>
			</div>
		</div>
		<div class="col mb-4">
			<div class="card">
				<img src="#" class="card-img-top" alt="#" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a longer card with supporting text below as a natural
						lead-in to additional content. This content is a little bit longer.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cards",
	data() {},
};
</script>

<style scoped>
.card-img-top {
	width: 50%;
}
.card {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	border-radius: 15px;
}
</style>
