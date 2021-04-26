<template>
	<div class="background">
		<div class="row m-0 p-md-5 p-0 justify-content-between mb-5 ">
			<div class="col-12 col-md-6 align-items-center d-inline-flex ">
				<div class="py-4">
					<h1 class="title font-weight-bold ">Conatct Us</h1>
					<h3 class="description mt-2">
						The demand for programmers is increasing in local, regional, and
						global labor markets, but there is a shortage of qualified
						candidates. So, we took on our shoulders the mission of qualifying a
						new generation of programmers.
					</h3>
				</div>
			</div>
			<div class="col-4 d-none d-md-block ">
				<img class="col-12" src="../../assets/aboutUs.png" alt="Contact Us" />
			</div>
		</div>

		<div class="row m-0 p-md-5 mt-5 p-0 justify-content-between mb-5">
			<div class="col-12 col-md-6 align-items-center d-inline-flex ">
				<div class="py-4">
					<h2 class="title font-weight-bold ">Our Mission</h2>
					<h3 class="descriptionAbout mt-2">
						The demand for programmers is increasing in local, regional, and
						global labor markets, but there is a shortage of qualified
						candidates. So, we took on our shoulders the mission of qualifying a
						new generation of programmers.
					</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Tchnologies",
	data() {
		return {};
	},
};
</script>

<style scoped>
.background {
	background: url("../../assets/background.svg") no-repeat;
	background-size: cover;
}
.head {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	gap: 40px;
	flex-wrap: wrap;
	height: 85vh;
}
.paraghraph {
	width: 50vw;
}
.images {
	width: 30vw;
	height: 70%;
}

.title {
	font-weight: 800;

	color: rgb(255, 118, 0);
}
.description {
	font-weight: 300;
	color: rgb(255, 255, 255);
}
.descriptionAbout {
	font-weight: 300;
}
</style>
