<template>
  <div class="p-3">

    <b-card-body class="bg-white">
      <div class="row m-0 justify-content-between">
        <div class="col-12 col-lg-5">
          <label class="mt-2" for="name">Full Name</label>
          <input
            require
            disabled
            id="name"
            name="name"
            type="text"
            class="form-control"
            v-bind:value="user.name"
          />
          <label class="mt-2" for="email">E-Mail</label>
          <input
            require
            disabled
            id="email"
            name="email"
            type="text"
            class="form-control"
            v-bind:value="user.email"
          />
          <label for="mob" class="mt-2">Phone No.</label>
          <input
            require
            disabled
            id="mob"
            name="mobile"
            type="tel"
            class="form-control"
            v-bind:value="user.mobile"
          />
          <label class="mt-2">Orange Mobile No.</label>
          <input
            require
            disabled
            name="orange_mobile"
            type="tel"
            class="form-control"
            v-bind:value="user.orange_mobile"
          />
          <div class="row m-0">
            <div class="col-6 pl-0">
              <label class="mt-2">Education</label>
              <input
                name="education_level"
                id="education"
                class="form-control"
                v-bind:value="user.education_level"
                disabled
              />
            </div>
            <div class="col-6 pr-0">
              <label class="mt-2">Field</label>
              <input
                required
                disabled
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
            require
            disabled
            id="date"
            name="date_of_birth"
            type="date"
            class="form-control"
            v-bind:value="user.date_of_birth"
          />
          <label class="mt-2" for="gender">Gender</label>
          <input
            name="gender"
            id="gender"
            disabled
            class="form-control"
            v-bind:value="user.gender"
          />

          <label for="mob" class="mt-2">Address</label>
          <input
            require
            disabled
            id="Adress"
            name="address"
            type="text"
            class="form-control"
            v-bind:value="user.address"
          />
          <label class="mt-2">English Level</label>
          <input
            require
            disabled
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
                disabled
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
                disabled
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
              v-bind:src="'http://localhost:8000/images/' + user.avatar"
              alt=""
            />
          </div>
        </div>
      </div>
  <div class="p-2 mt-2">
    <div class="mb-3">
      <b-button v-b-toggle.my-collapse-2>Update Password</b-button>
     
    </div>

    <b-collapse id="my-collapse-2">
      <b-card >
           <label class="mt-2" for="email">Old Password <span v-if="err.old" class="alert-danger mx-1 px-2 ">{{err.old[0]}}</span> </label>
              <input
            require
            v-model="data.old"
            id="name"
            name="name"
            type="password"
            class="form-control"
           
          />
          <label class="mt-2" for="email">New Password<span v-if="err.password" class="alert-danger mx-1 px-2">{{err.password[0]}}</span></label>
          <input
            require
            v-model="data.password"
            id="email"
            name="email"
            type="password"
            class="form-control"
            
          />
          <label for="mob" class="mt-2">Re-Enter Password<span v-if="err.password_confirmation" class="alert-danger mx-1 px-2">{{err.password_confirmation[0]}}</span></label>
          <input
            require
            v-model="data.password_confirmation"
            id="mob"
            name="mobile"
            type="password"
            class="form-control"
           
          />
          <div @click="updatePassword" class="btn btn-primary float-right mt-3">
              Update
          </div>
      </b-card>
    </b-collapse>

 
  </div>
    </b-card-body>

    <div class="p-2 bg-white my-5 overflow-auto">
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
              <b-button @click="view(data.item)" variant="danger mx-1"
                >View</b-button
              >

              <router-link v-bind:to="'trainees/edit/' + data.item.id">
                <b-button variant="danger mx-1">Edit</b-button>
              </router-link>
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
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
          <div class="modal-body">Password Updated Successfully</div>
          <div class="modal-footer">
            <button @click="$router.go(-1)" type="button" class="btn btn-primary">
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
import { store } from "../../store/store";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
export default {
  data() {
    return {
      editor: ClassicEditor,
      perPage: 10,
      currentPage: 1,
      show:false,
      err:{
          old:false,
          password:false,
          password_confirmation:false,
      },
      data:{
          id:store.state.user.id
      },
      filter: "",
      fields: [
        "id",
        "agility",
        "team_work",
        "leadership_skill",
        "time_management",
        "presentation_skills",
        "oral_expression",
        "quality_of_the_answers",
        "actions",
      ],
      posts: [],

      user: store.state.user,
    };
  },
  computed: {
    rows() {
      return this.posts.length;
    },
  },
  mounted: function () {
    axios
      .post("http://localhost:8000/getevaluation/" + this.user.id)
      .then((res) => (this.posts = res.data))
      .catch((err) => console.log(err));
  },
  methods:{
      view(i) {
      store.state.evaluation = i;
      this.$router.push("/trainee/ViewEvaluation");
    },
    updatePassword(){
        axios.post('http://localhost:8000/changePassword' , this.data)
        .then((res)=>{
            console.log(res.data)
            if(res.data !=1){
                this.err.old = res.data.old
                this.err.password = res.data.password
                this.err.password_confirmation = res.data.password_confirmation
                 this.data.old = ""
                this.data.password = ""
                this.data.password_confirmation = ""
            }else{
                this.show=true
            }
            })
        .catch(err=>console.log(err))
    }
  }
};
</script>