<template>
	<div class="background">
		<div class="row m-0 p-md-5 p-0 justify-content-between mb-5 ">
			<div class="col-12 col-md-6 align-items-center d-inline-flex ">
				<div class="py-4">
					<h1 class="title font-weight-bold ">About Us</h1>
					<h3 class="description mt-2">
						know about our mission, what does the academy offer, the eligibilty
						criteria and all about our tarining courses and how to enroll.
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
					<h2 class="title font-weight-bold ">What’s in it for you?</h2>
					<ul class="o-square-list">
						<li>
							Develop your communication skills and get a new fresh start and
							endless opportunities.
						</li>
						<li>
							Develop your technical skills in mobile and web development and
							create new projects.
						</li>
						<li>
							Develop your personal skills and boost your self confidence.
						</li>
						<li>
							Improve your knowledge about programming and learn about the
							latest technologies.
						</li>
						<li>
							Start your professional life and draw a plan for your future.
						</li>
					</ul>
				</div>
			</div>
			<div class="col-12 col-md-6 align-items-center d-inline-flex ">
				<div class="py-4">
					<h2 class="title font-weight-bold ">What does the academy offer?</h2>
					<ol>
						<li>
							Free 6-month training.
						</li>
						<li>
							Intensive courses offered by a team of qualified trainers in an
							interactive learning experience, such as HTML, CSS, JavaScript
							(React,) PHP (Laravel), Python (Flask).
						</li>
						<li>
							Networking opportunities with the largest companies in the local
							and international markets.
						</li>
						<li>
							Training courses in life and administrative skills.
						</li>
						<li>
							Start your professional life and draw a plan for your future.
						</li>
					</ol>
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
