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
			<div class="col-6 d-none d-md-block ">
				<img class="col-12" src="../../assets/contactUs.png" alt="Contact Us" />
			</div>
		</div>

		<div class="row m-0 p-md-5 p-0 justify-content-around mb-5">
			<div class="form col-5">
				<div class="d-flex flex-column-reverse mb-3">
					<input type="text" class="form-control" id="name" />
					<label id="labelname" htmlFor="name">Full Name</label>
				</div>
				<div class="d-flex flex-column-reverse mb-3">
					<input type="email" class="form-control" id="email" />
					<label id="labelEmail" htmlFor="email">Email</label>
				</div>
				<div class="d-flex flex-column-reverse mb-3">
					<input type="number" class="form-control" id="number" />
					<label id="labelnumber" htmlFor="number">Mobile</label>
				</div>
				<div class="d-flex flex-column-reverse mb-3">
					<select class="form-control" id="exampleSelect1">
						<option>Amman</option>
						<option>Irbid</option>
					</select>
					<label id="labeloption" htmlFor="number">Governorate</label>
				</div>
				<div class="btn btn-primary col-12 justify-content-center mb-3">
					Login
				</div>
			</div>
			<div class="col-5 d-flex flex-column">
				<div class="d-flex flex-column-reverse mb-3 ">
					<input type="text" class="form-control" id="name" />
					<label id="labelname" htmlFor="name">Full Name</label>
				</div>
				<div class="d-flex flex-column-reverse mb-3 flex-grow-1">
					<textarea class="form-control flex-grow-1" id="email"></textarea>
					<label id="labelEmail" htmlFor="email">Email</label>
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

#email:focus {
	border: orange 2px solid;
}
#email:focus ~ #labelEmail {
	color: orange;
}

#name:focus {
	border: orange 2px solid;
}
#name:focus ~ #labelname {
	color: orange;
}
#number:focus {
	border: orange 2px solid;
}
#number:focus ~ #labelnumber {
	color: orange;
}
select:focus {
	border: orange 2px solid;
}
select:focus ~ #labeloption {
	color: orange;
}
</style>
