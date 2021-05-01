<template>
	<footer
		v-if="this.$route.path != '/login'"
		class="o-footer mt-0"
		role="contentinfo"
	>
		<h2 class="sr-only">Site map &amp; informations</h2>
		<div class="o-footer-top">
			<div class="container-md m-0">
				<ul class="nav align-items-center">
					<li class="nav-item mb-3 mb-md-0 pl-md-0 col-12 col-md-auto">
						Follow us
					</li>
					<li class="nav-item ml-2">
						<a
							class="nav-link btn btn-inverse btn-social btn-twitter"
							href="https://twitter.com/orangeJo"
							><span class="sr-only">Twitter</span></a
						>
					</li>
					<li class="nav-item ml-2">
						<a
							class="nav-link btn btn-inverse btn-social btn-facebook"
							href="https://www.facebook.com/CodingAcademybyOrange"
							><span class="sr-only">Facebook</span></a
						>
					</li>
					<li class="nav-item ml-2">
						<a
							class="nav-link btn btn-inverse btn-social btn-instagram"
							href="https://www.instagram.com/orangejo/"
							><span class="sr-only">Instagram</span></a
						>
					</li>
					<li class="nav-item ml-2">
						<a
							class="nav-link btn btn-inverse btn-social btn-linkedin"
							href="https://www.linkedin.com/company/orange-jordan/mycompany/"
							><span class="sr-only">Linkedin</span></a
						>
					</li>
					<li class="nav-item ml-2">
						<a
							class="nav-link btn btn-inverse btn-social btn-youtube"
							href="https://www.youtube.com/channel/UCSTBpjukawEv6ZUmH6l-ibw"
							><span class="sr-only">YouTube</span></a
						>
					</li>
					<li class="nav-item ml-2">
						<a
							class="nav-link btn btn-inverse btn-social btn-pinterest"
							href="https://www.pinterest.com/orangejordan/_created/"
							><span class="sr-only">Pinterest</span></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="o-footer-body">
			<div class="container-md">
				<div class="row">
					<div class="col-md-3 col-sm-6">
						<h3>Orange coding Academy</h3>
						<ul class="nav flex-column">
							<li class="nav-item">
								<router-link class="nav-link" to="/">Home</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/technologies"
									>Technologies</router-link
								>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/aboutUs"
									>About Us</router-link
								>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/contactUs"
									>Contact Us</router-link
								>
							</li>
						</ul>
					</div>
					<div class="col-md-3 col-sm-6">
						<h3>Entertainment</h3>
						<ul class="nav flex-column">
							<li class="nav-item">
								<a
									class="nav-link"
									href="https://www.orange.jo/en/services/pages/anghami-bundles.aspx"
									>Anghami</a
								>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="https://www.orange.jo/EN/services/Pages/shahid-plus.aspx"
									>Shahid Plus</a
								>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="https://www.orange.jo/EN/services/Pages/my-status.aspx"
									>My Status</a
								>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="https://www.orange.jo/EN/services/Pages/magic-voice.aspx"
									>Magic Voice</a
								>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="https://www.orange.jo/_layouts/15/Custom404.html?requestUrl=https://www.orange.jo/en/serv"
									>StartzPlay</a
								>
							</li>
						</ul>
					</div>
					<div class="col-md-3 col-sm-6">
						<h3>Wholesale</h3>
					</div>
					<div class="col-md-3 col-sm-6">
						<h3>Point of sale</h3>
						<ul class="nav flex-column">
							<li class="nav-item">
								<a
									class="nav-link"
									href="https://www.orange.jo/en/pages/pos-login.aspx"
									>PM Lines</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="o-footer-bottom">
			<div class="container-md">
				<ul class="nav flex-column flex-md-row">
					<li class="nav-item my-1 my-md-0">
						<a
							class="nav-link"
							href="https://www.orange.jo/en/pages/contact-us.aspx"
						>
							<span aria-hidden="true" class="icon-location-pin-compass"></span>
							Contact Us
						</a>
					</li>
					<li class="nav-item my-1 my-md-0">
						<a class="nav-link" href="https://store.orange.jo/">
							<span
								aria-hidden="true"
								class="icon-mobile-network-coverage"
							></span>
							Locate store
						</a>
					</li>
					<li class="nav-item my-1 my-md-0">
						<a
							class="nav-link"
							href="https://www.orange.jo/en/pages/coverage.aspx"
						>
							<span aria-hidden="true" class="icon-Colour-Call"></span>
							Coverage map
						</a>
					</li>
					<li class="nav-item my-1 my-md-0">
						<a class="nav-link" href="https://www.orange.jo/sites/Business/EN">
							<span aria-hidden="true" class="icon-child-protection"></span>
							Business
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="o-footer-bottom">
			<div class="container-md">
				<ul class="nav flex-column flex-md-row">
					<li class="nav-item mb-2 mt-1 mr-3 my-md-0 align-self-md-center">
						© Orange 2021
					</li>
					<li class="nav-item mb-2 mt-1 my-md-0">
						<a class="nav-link" href="https://www.orange.jo/EN/Pages/legal.aspx"
							>Legal</a
						>
					</li>
					<li class="nav-item mb-2 mt-1 my-md-0">
						<a class="nav-link" href="https://orange.elevatus.jobs/">Jobs</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {};
	},
};
</script>
