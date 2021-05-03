<template>
	<div>
		<div class="accordion p-2 mb-5" role="tablist">
			<b-card no-body class="mb-1">
				<b-card-header header-tag="header" class="p-2" role="tab">
					<b-button
						class="bg-white text-primary"
						block
						v-b-toggle.accordion-1
						variant="info"
						>Add New Trainee</b-button
					>
				</b-card-header>
				<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
					<b-card-body>
						<form
							@submit="submit"
							id="traineesForm"
							enctype="multipart/form-data"
						>
							<div class="row m-0 justify-content-between">
								<div class="col-12 col-lg-5">
									<label class="mt-2" for="name">Full Name</label>
									<input
										required
										id="name"
										v-model="name"
										name="name"
										type="text"
										class="form-control"
									/>
									<label class="mt-2" for="email">E-Mail</label>
									<input
										required
										id="email"
										v-model="email"
										name="email"
										type="text"
										class="form-control"
									/>
									<label for="mob" class="mt-2">Phone No.</label>
									<input
										required
										id="mob"
										v-model="mobile"
										name="mobile"
										maxlength="10"
										type="tel"
										class="form-control"
									/>
									<label class="mt-2">Orange Mobile No.</label>
									<input
										required
										name="orange_mobile"
										type="tel"
										maxlength="10"
										v-model="orange_mobile"
										class="form-control"
									/>
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
											<input
												required
												name="field"
												v-model="field"
												type="text"
												class="form-control"
											/>
										</div>
									</div>
								</div>

								<div class="col-12 col-lg-5">
									<label class="mt-2" for="date">Date Of Birth</label>
									<input
										required
										id="date"
										name="date_of_birth"
										type="date"
										class="form-control"
										v-model="date_of_birth"
									/>
									<label class="mt-2" for="gender">Gender</label>
									<select name="gender" id="gender" class="form-control">
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
									<label for="mob" class="mt-2">Address</label>
									<input
										required
										id="Adress"
										v-model="address"
										name="address"
										type="text"
										class="form-control"
									/>
									<label class="mt-2">English Level</label>
									<input
										required
										v-model="english_level"
										name="english_level"
										type="text"
										class="form-control"
									/>
									<div class="row m-0">
										<div class="col-6 pl-0">
											<label class="mt-2">Refrence 1</label>
											<input
												required
												type="text"
												name="refrences_1"
												v-model="refrences_1"
												class="form-control"
											/>
										</div>
										<div class="col-6 pr-0">
											<label class="mt-2">Refrence 2</label>
											<input
												required
												type="text"
												name="refrences_2"
												v-model="refrences_2"
												class="form-control"
											/>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-2">
									<div
										class="d-inline-flex flex-column col-12 h-100 align-items-center"
									>
										<img
											class="col-8 col-lg-auto mt-3"
											v-bind:src="img"
											alt=""
										/>
										<div class="custom-file my-3">
											<input
												required
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
											class="btn btn-primary mt-auto justify-content-center align-self-stretch"
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
		<div class="p-2 bg-white overflow-auto">
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
						
					>
						<template #cell(image)="data">
							<img
								v-bind:src="'http://localhost:8000/images/' + data.item.avatar"
								alt=""
							/>
						</template>

						<template v-slot:cell(actions)="data">
							
								<b-button @click="$router.push('trainees/evaluation/' + data.item.id)" variant="danger mx-1">View</b-button>
				
							<router-link v-bind:to="'trainees/edit/' + data.item.id">
								<b-button variant="danger mx-1">Edit</b-button>
							</router-link>
							<b-button variant="danger mx-1" @click="deleteItem(data.item.id)"
								>Delete</b-button
							>
						</template>
					</b-table>
					
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
		<div
			v-bind:style="{ visibility: show ? 'visible' : 'hidden' }"
			v-bind:class="{ show: show }"
			class="modal fade"
			id="exampleModalLive"
			tabindex="-1"
			aria-labelledby="exampleModalLiveLabel"
			style="display: block"
			aria-modal="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Success</h5>
						<!-- Boosted mod: using visually hidden text instead of aria-label -->
						<button type="button" class="close" data-dismiss="modal">
							<span class="sr-only">Close live modal demo</span>
						</button>
					</div>
					<div class="modal-body">Tranee Added successfully</div>
					<div class="modal-footer">
						<button @click="show = !show" type="button" class="btn btn-primary">
							Ok
						</button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="show" class="modal-backdrop fade show"></div>
	</div>
</template>

<script>
import axios from "axios";
import { store } from "../../store/store";
export default {
	data() {
		return {
			perPage: 10,
			currentPage: 1,
			filter: "",
			store: store,
			name: "",
			email: "",
			mobile: "",
			orange_mobile: "",
			field: "",
			address: "",
			english_level: "",
			refrences_1: "",
			refrences_2: "",
			date_of_birth: "",
			show: false,

			img:
				"https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
			fields: [
				"id",
				"image",
				"name",
				"email",
				"mobile",
				"orange_mobile",
				"gender",
				"refrences_1",
				"actions",
			],
			posts: [],
		};
	},

	methods: {
		deleteItem(id) {
			axios.post("http://localhost:8000/deleteuser/" + id).then(() => {
				var index = store.state.users.findIndex((x) => x.id == id);
				store.state.users.splice(index, 1);
				index = this.posts.findIndex((x) => x.id == id);
				this.posts.splice(index, 1);
			});
		},
		submit(e) {
			e.preventDefault();
			var data = new FormData(document.getElementById("traineesForm"));
			axios
				.post("http://localhost:8000/addTrainee", data)
				.then((res) => {
					this.store.state.users.push(res.data);
					this.posts.push(res.data);
					this.name = "";
					this.email = "";
					this.mobile = "";
					this.orange_mobile = "";
					this.field = "";
					this.address = "";
					this.english_level = "";
					this.refrences_1 = "";
					this.refrences_2 = "";
					this.date_of_birth = "";
					this.show = true;
				})
				.then((err) => console.log(err));
		},

		updateimg(e) {
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onloadend = () => {
				this.img = reader.result;
			};
		},
	},
	computed: {
		rows() {
			return this.posts.length;
		},
	},
	mounted: function() {
		this.posts = this.store.state.users.filter((i) => i.is_admin == 0);
	},
};
</script>
