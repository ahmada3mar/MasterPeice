<template>
	<div class="background">
		<main role="main">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner ">
					<div class="carousel-item active">
						<img src="../../assets/slider2.jpg" alt="Slider Image" />
						<svg
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label=" :  "
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title></title>

							<text
								x="50%"
								y="50%"
								fill="#777"
								dy=".3em"
								class="font-weight-bold"
							></text>
						</svg>
						<div class="container">
							<div class="carousel-caption text-left">
								<h1 class="text-primary">Orange Coding Academy</h1>
								<p class="white">
									Where we took on our shoulders the mission of tarining a new
									generation of qualified programmers.
								</p>
								<p>
									<router-link class="btn btn-lg btn-primary" to="/AboutUs"
										>Know More</router-link
									>
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img src="../../assets/slider1.jpg" alt="Slider Image" />
						<svg
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label=" :  "
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title></title>

							<text
								x="50%"
								y="50%"
								fill="#777"
								dy=".3em"
								class="font-weight-bold"
							></text>
						</svg>

						<div class="container">
							<div class="carousel-caption text-left">
								<h1 class="text-primary">Programmers Factory</h1>
								<p class="white">
									The demand for programmers is increasing in local, regional,
									and global labor markets, we are looking forward to cover this
									demand.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="/AboutUs">
										Know More</a
									>
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img src="../../assets/slider3.jpg" alt="Slider Iamge" />
						<svg
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label=" :  "
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title></title>

							<text
								x="50%"
								y="50%"
								fill="#777"
								dy=".3em"
								class="font-weight-bold"
							></text>
						</svg>

						<div class="container">
							<div class="carousel-caption text-left">
								<h1 class="text-primary">All In One Place</h1>
								<p class="white">
									Develop your communication, technical and personal skills.
									Boost your knowledge about programming and learn about the
									latest technologies.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="/AboutUs"
										>Know More</a
									>
								</p>
							</div>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#myCarousel"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#myCarousel"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<div claSS="bg-light pt-5 pb-3">
				<div claSS="container">
					<div claSS="row justify-content-center">
						<div>
							<div claSS="row  ">
								<div claSS="col-md-4 col-12 d-inline-flex justify-content-stretch my-md-0 my-2">
									<div claSS="card border">
										<img
											src="../../assets/technologies.png"
											alt=""
											claSS="card-img-top bg-yellow"
											width="416"
											height="229"
											loading="lazy"
										/>
										<div claSS="card-body position-static">
											<h3 claSS="card-title mb-2">
												Technologies
											</h3>
											<p claSS="card-text mb-3" lang="zxx">
												Technologies are an intensive course offered by a team
												of qualified trainers in an interactive learning
												experience, based on the market needs.
											</p>
											<Link to="/Technologies" claSS="btn btn-primary"
												>Find out more<span claSS="sr-only"
													>&nbsp;about the TITLE OF THE INSIGHT</span
												></Link
											>
										</div>
									</div>
								</div>
								<div claSS="col-md-4 col-12 d-inline-flex justify-content-stretch my-md-0 my-2">
									<div claSS="card border">
										<img
											src="../../assets/aboutUs_card.png"
											alt=""
											claSS="card-img-top bg-yellow"
											
											height="229"
											loading="lazy"
										/>
										<div claSS="card-body position-static">
											<h3 claSS="card-title mb-2">
												About Us
											</h3>
											<p claSS="card-text mb-3" lang="zxx">
												Anwer all your questions about our mission, what does
												the academy offer, the eligibilty criteria and all about
												our tarining course.
											</p>
											<Link to="/AboutUs" claSS="btn btn-primary"
												>Find out more<span claSS="sr-only"
													>&nbsp;about the TITLE OF THE INSIGHT</span
												></Link
											>
										</div>
									</div>
								</div>
								<div claSS="col-md-4 col-12 d-inline-flex justify-content-stretch my-md-0 my-2">
									<div claSS="card border">
										<img
											src="../../assets/contactus_card.png"
											alt=""
											claSS="card-img-top bg-yellow"
											
											height="229"
											loading="lazy"
										/>
										<div claSS="card-body position-static">
											<h3 claSS="card-title mb-2">
												Contact Us
											</h3>
											<p claSS="card-text mb-3" lang="zxx">
												Stay in touch and updated, feel free to ask if you have
												any further questions and we will make sure to cover
												your questions and concerns..
											</p>
											<Link to="#" claSS="btn btn-primary"
												>Find out more<span claSS="sr-only"
													>&nbsp;about the TITLE OF THE INSIGHT</span
												></Link
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div claSS="popular-services p-2 ">
				<div claSS="container">
					<div claSS="d-flex mb-3">
						<h2 claSS="mb-0">Announcements</h2>
					</div>
					<div claSS="row my-4">
						<div claSS="col-12">
							<div claSS="row">
								<img
									claSS="col-12 col-lg-4"
									src="../../assets/graduation.jpg"
									alt=""
									
									
									loading="lazy"
								/>
								<div
									claSS="col justify-content-between d-inline-flex flex-column"
								>
									<div>
										<h2 claSS="card-title text-primary">Second Cohort Graduation</h2>
										<h4 claSS="card-text  font-weight-normal"  lang="zxx">
											The Coding Academy is preparing the graduation ceremony,
											for fifty-four trainees who spent seven months training in
											the Coding Academy, which will occur online through Zoom
											call given the circumstances. The graduation will be after
											Ramadan as the trainees delivered their final project (the
											masterpiece) and discussed it during Ramadan in front of a
											jury that contained Orange technical experts and Simlopn
											members.
										</h4>
									</div>
									<div>

										<div class="btn btn-primary float-left my-3 float-md-right">See More </div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div claSS="d-flex my-4"></div>
					<div claSS="row my-4">
						<div claSS="col-12">
							<div claSS="row">
								<div
									claSS="col justify-content-between d-inline-flex flex-column"
								>
									<div>
										<h2 claSS="card-title  text-primary">Third Batch Lanchuing</h2>
										<h4 claSS="card-text font-weight-normal" lang="zxx">
											Orange Jordan intends soon to launch the third cohort
											within Orange Coding Academy, for those wishing to join
											the third batch of its programming academy starting soon,
											indicating that it will currently receive applications and
											then consider them to select the most qualified candidates
											for the final stage, and the actual training and interview
											dates will be determined later.
										</h4>
									</div>
									<div>

										<div class="btn btn-primary  my-3">See More </div>
									</div>
								</div>
								<img
									claSS="col-12 col-lg-4"
									src="../../assets/thirdCohort.jpg"
									alt=""
									width="416"
									
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<div class="after px-5">
		<h1>
			Our Location
			</h1>	
		</div>
		<div class="row m-0">
			<img class="col-12 p-0" src="../../assets/location.png" alt="">
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
};
</script>

<style >
/* Carousel */
.carousel-caption {
	bottom: 3rem;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.541);
}
.bd-placeholder-img {
	height: 85vh;
}

.white {
	color: white;
}
.carousel-indicators {
	margin-right: auto;
	margin-left: auto;
}
.carousel-item > img {
	position: absolute;
	top: 0;
	left: 0;
	min-width: 100%;
	height: 85vh;
}

/* Featurettes
------------------------- */
.featurette-divider {
	margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}
/* Thin out the marketing headings */
.featurette-heading {
	font-weight: 300;
	line-height: 1;
	letter-spacing: -0.05rem;
}
.background {
	background: url("../../assets/background.svg") no-repeat;
	background-size: cover;
}
.after{
	position: relative;
}
.after::after{
	content: "";
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #fff;
    display: block;
    position: absolute;
    left: 124px;
	z-index: 10;
}
/* RESPONSIVE CSS
-------------------------------------------------- */
@media (min-width: 40em) {
	/* Bump up size of carousel content */
	.carousel-caption p {
		margin-bottom: 1.25rem;
		font-size: 1.25rem;
		line-height: 1.4;
	}
	.featurette-heading {
		font-size: 50px;
	}
}
@media (min-width: 62em) {
	.featurette-heading {
		margin-top: 7rem;
	}
}
</style>
