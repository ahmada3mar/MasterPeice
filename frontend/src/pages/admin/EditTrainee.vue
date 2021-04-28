<template>
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
                    name="name"
                    type="text"
                    class="form-control"
                    v-bind:value="user.name"
                  />
                  <label class="mt-2" for="email">E-Mail</label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="text"
                    class="form-control"
                     v-bind:value="user.email"
                  />
                  <label for="mob" class="mt-2">Phone No.</label>
                  <input
                    required
                    id="mob"
                    name="mobile"
                    type="tel"
                    class="form-control"
                     v-bind:value="user.mobile"
                  />
                  <label class="mt-2">Orange Mobile No.</label>
                  <input
                    required
                    name="orange_mobile"
                    type="tel"
                    class="form-control"
                     v-bind:value="user.orange_mobile"
                  />
                  <div class="row m-0">
                    <div class="col-6 pl-0">
                      <label class="mt-2">Education</label>
                      <select
                        name="education_level"
                        id="education"
                        class="form-control"
                      >
                        <option :selected="user.education_level == 'High School' ? true : false " value="High School">High School</option>
                        <option :selected="user.education_level == 'Diploma' ? true : false " value="Diploma">Diploma</option>
                        <option :selected="user.education_level == 'Bachelor' ? true : false " value="Bachelor">Bachelor</option>
                        <option :selected="user.education_level == 'Master' ? true : false " value="Master">Master</option>
                      </select>
                    </div>
                    <div class="col-6 pr-0">
                      <label class="mt-2">Field</label>
                      <input
                        required
                        name="field"
                        type="text"
                        class="form-control"
                         v-bind:value="user.field"
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
                     v-bind:value="user.date_of_birth"
                  />
                  <label class="mt-2" for="gender">Gender</label>
                  <select name="gender" id="gender" class="form-control">
                      <option :selected="user.gender == 'Male' ? true : false " value="Male">Male</option>
                      <option :selected="user.gender == 'Female' ? true : false " value="Female">Female</option>
                   
                  </select>
                  <label for="mob" class="mt-2">Address</label>
                  <input
                    required
                    id="Adress"
                    name="address"
                    type="text"
                    class="form-control"
                     v-bind:value="user.address"
                  />
                  <label class="mt-2">English Level</label>
                  <input
                    required
                    name="english_level"
                    type="text"
                    class="form-control"
                     v-bind:value="user.english_level"
                  />
                  <div class="row m-0">
                    <div class="col-6 pl-0">
                      <label class="mt-2">Refrence 1</label>
                      <input
                        required
                        type="text"
                        name="refrences_1"
                        class="form-control"
                         v-bind:value="user.refrences_1"
                      />
                    </div>
                    <div class="col-6 pr-0">
                      <label class="mt-2">Refrence 2</label>
                      <input
                        required
                        type="text"
                        name="refrences_2"
                        class="form-control"
                        v-bind:value="user.refrences_2"
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
</template>


<script>
import {store} from "../../store/store"
import axios from "axios"
export default {
    data(){
        return{
            user:store.state.users.filter(i=>i.id==this.$route.params.id)[0] ,
            img : 'http://localhost:8000/images/' + store.state.users.filter(i=>i.id==this.$route.params.id)[0].avatar
        }
    },
    methods:{
         submit(e) {
      e.preventDefault();
      var data = new FormData(document.getElementById("traineesForm"));
      axios
        .post("http://localhost:8000/edituser/"+this.user.id, data)
        .then((res) =>{
           store.state.users[store.state.users.findIndex(i=>i.id==this.user.id)] = res.data ;
            console.log(store.state.users)
            this.$router.push("/admin/trainees")
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
    }
}
</script>