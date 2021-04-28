<template>
	<div>
		<div class="accordion p-2 mb-5 " role="tablist">
			<b-card no-body class="mb-1">
				<b-card-header header-tag="header" class="p-2" role="tab">
					<b-button
						class="bg-white text-primary"
						block
						v-b-toggle.accordion-1
						variant="info"
						visable
						>Add New Trainee</b-button
					>
				</b-card-header>
				<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
					<b-card-body>
						<form @submit="submit" id="traineesForm" enctype='multipart/form-data'>
						<div class="row m-0 justify-content-between">
							<div class="col-12 col-lg-5">
								<label class="mt-2" for="name">Full Name</label>
								<input required  id="name" name="name" type="text" class="form-control" />
								<label class="mt-2" for="email">E-Mail</label>
								<input required
									id="email"
									name="email"
									type="text"
									class="form-control"
								/>
								<label for="mob" class="mt-2">Phone No.</label>
								<input required id="mob" name="mobile" type="tel" class="form-control" />
								<label class="mt-2">Orange Mobile No.</label>
								<input required name="orange_mobile" type="tel" class="form-control" />
								<div class="row m-0">
									<div class="col-6 pl-0">
										<label class="mt-2">Education</label>
										<select
											name="education_level"
											id="education"
											class="form-control"
										>
											<option value="High School">High School</option>
											<option value="High School">Diploma</option>
											<option value="Bachelor">Bachelor</option>
											<option value="Master">Master</option>
										</select>
									</div>
									<div class="col-6 pr-0">
										<label class="mt-2">Field</label>
										<input required
											name="field"
											type="text"
											class="form-control"
										/>
									</div>
								</div>
							</div>

							<div class="col-12 col-lg-5">
								<label class="mt-2" for="date">Date Of Birth</label>
								<input required id="date" name="date_of_birth" type="date" class="form-control" />
								<label class="mt-2" for="gender">E-Mail</label>
								<select name="gender" id="gender" class="form-control">
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
								<label for="mob" class="mt-2">Address</label>
								<input required
									id="Adress"
									name="address"
									type="text"
									class="form-control"
								/>
								<label class="mt-2">English Level</label>
								<input required name="english_level" type="text" class="form-control" />
								<div class="row m-0">
									<div class="col-6 pl-0">
										<label class="mt-2">Refrence 1</label>
										<input required type="text" name="refrences_1" class="form-control" />
									</div>
									<div class="col-6 pr-0">
										<label class="mt-2">Refrence 2</label>
										<input required type="text" name="refrences_2" class="form-control" />
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-2">
								<div
									class="d-inline-flex flex-column col-12 h-100 align-items-center"
								>
									<img
										class="col-8 col-lg-auto mt-3 "
										v-bind:src="img"
										alt=""
									/>
									<div class="custom-file my-3">
										<input required
										name="avatar"
											type="file"
											class="custom-file-input"
											id="validatedCustomFile"
											aria-describedby="customFileValidationFeedback"
											
											@change="updateimg"
										/>
										<label
											class="custom-file-label"
											for="validatedCustomFile"
										></label>
									</div>

									<button
										class="btn btn-primary mt-auto  justify-content-center align-self-stretch"
										
									>
										Submit
									</button>
								</div>
							</div>
						</div>
						</form>
					</b-card-body>
				</b-collapse>
			</b-card>
		</div>
		<div class="p-2 bg-white">
			<b-row class="mb-3">
				<b-col md="3">
					<b-form-input
						v-model="filter"
						type="search"
						id="filterInput"
						placeholder="Type to Search"
					></b-form-input>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-table
						striped
						hover
						:items="posts"
						:filter="filter"
						:fields="fields"
						:per-page="perPage"
						:current-page="currentPage"
						v-if="posts.length > 0"
					>
						<template v-slot:cell(actions)="data">
							<b-button variant="warning mx-1" @click="deleteItem(data.item.id)"
								>View</b-button
							>
							<b-button variant="danger mx-1" @click="deleteItem(data.item.id)"
								>Delete</b-button
							>
						</template>
					</b-table>
					<div v-else class="d-flex h-100 align-items-center justify-content-center">
						<div class="spinner-grow text-primary" role="status">
						<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-secondary" role="status">
						<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow bg-white" role="status">
						<span class="sr-only">Loading...</span>
						</div>
					</div>
					<b-pagination
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						aria-controls="my-table"
						v-if="posts.length > 0"
					></b-pagination>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			perPage: 10,
			currentPage: 1,
			filter: "",
			img:'https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png',
			fields: ["id","name" ,  "mobile","email", "orange_mobile", "gender" , "refrences_1" ],
			posts: [
				
			],
		};
	},

	methods: {
		deleteItem(id) {
			const index = this.posts.indexOf((x) => x.id === id);
			this.posts.splice(index, 1);
		},
		submit(e){
			e.preventDefault() ;
			var data = new FormData(document.getElementById('traineesForm'));
			axios.post('http://localhost:8000/addTrainee' , data).then(
				res=>this.posts.push(res.data)
				
			).then(err=>console.log(err))
		},

		updateimg(e){
           const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onloadend = () => {
                  this.img = reader.result
              };        
          }
		
	},
	computed: {
		rows() {
			return this.posts.length;
		},
	},
	beforeCreate:function(){
		axios.post('http://localhost:8000/getTrainee').then(
				res=>this.posts=res.data
			).then(err=>console.log(err))
	}
};
</script>
