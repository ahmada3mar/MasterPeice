<template>
<div >

  <div  class="accordion p-2 mb-5 " role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-2" role="tab">
        <b-button
          class="bg-white text-primary"
          block
          v-b-toggle.accordion-1
          variant="info"
     
          >Add New Admin</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-1"
    
        accordion="my-accordion"
        role="tabpanel"
      
      
       
      >
        <b-card-body>
                <form
              @submit="submit"
              id="traineesForm"
              enctype="multipart/form-data"
            >
          <div class="row m-0 justify-content-between">
        

            <div class="col-12 col-lg-5">
              <label class="mt-2" for="name">Full Name</label>
              <input id="name" name="name" required type="text" class="form-control" />
              <label class="mt-2"  for="email">E-Mail</label>
              <input id="email" placeholder="somone@example.com" name="email" type="email" required class="form-control" />

            </div>

            <div class="col-12 col-lg-5">
            
              <label for="mob" class="mt-2">Mobile No.</label>
              <input id="mobile" name="mobile" type="tel" maxlength="10" pattern="[0]{1}[7]{2}[0-9]{7}" required placeholder="077XXXXXXX" class="form-control" />
              <label class="mt-2">Role</label>
             <select name="is_admin"  class="form-control">
                    <option value="2">Admin</option>
                    <option value="1">Job Coach</option>
                   
                  </select>
              
            </div>
            <div class="col-12 col-lg-2">

              <div class="d-inline-flex flex-column col-12 h-100 align-items-center">


                  <img class="col-8 col-lg-auto mt-3 "  v-bind:src="img" alt="">
                    <div class="custom-file my-3">

                    <input @change="updateimg" type="file" name="avatar" class="custom-file-input"  id="validatedCustomFile" aria-describedby="customFileValidationFeedback" required>
                    <label class="custom-file-label" for="validatedCustomFile"></label>
   
                     </div>

                <button class="btn btn-primary mt-auto  justify-content-center align-self-stretch">Submit</button>
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
        <b-form-input  v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
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
          :sortable="true"
         
          :current-page="currentPage"
        >
         <template #cell(image)="data">
              <img  v-bind:src="'http://localhost:8000/images/'+data.item.avatar" alt="">
            </template>
         <template #cell(job_title)="data">
              {{data.item.is_admin == '1' ? 'Job Coach' : 'Admin'}}
            </template>
         <template v-slot:cell(actions)="data">
          
            <b-button variant="danger mx-1" >Edit</b-button>
          
            <b-button variant="danger mx-1" @click="deleteItem(data.item.id)">Delete</b-button>
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
            <div class="modal-body">Admin Added successfully</div>
            <div class="modal-footer">
     
              <button
                @click="show = !show"
                type="button"
                class="btn btn-primary"
              >
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

import axios from "axios"
import { store } from "../../store/store";
export default {
 data() {
   return {
      perPage: 10,
      currentPage: 1,
      store:store,
      filter:'',
      show:false,
      img:"https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
       fields: [
         { key: "id", sortable: true },
         { key: "image", sortable: true },
         { key: "name", sortable: true },
         { key: "email", sortable: true },
         { key: "mobile", sortable: true },
         { key: "job_title", sortable: true },
         { key: "actions", sortable: true },
       
        ],
    posts: [
     
    ],
   };
  },

  methods: {
    deleteItem(id) {
      axios.post('http://localhost:8000/deleteuser/' +  id).then(()=>{
        var index =  store.state.users.findIndex((x) => x.id == id);
         store.state.users.splice(index, 1);
         index = this.posts.findIndex((x) => x.id == id);
         this.posts.splice(index, 1);
        }
      )
    },

    submit(e) {
      e.preventDefault();
      var data = new FormData(document.getElementById("traineesForm"));
      axios
        .post("http://localhost:8000/addTrainee", data)
        .then((res) =>{this.store.state.users.push(res.data)
        this.posts.push(res.data);
        this.show=true
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
    mounted: function () {
      this.posts = this.store.state.users.filter(i=> i.is_admin ==1 || i.is_admin == 2)
  },


 
};
</script>
<style>
table .flip-list-move {
  transition: transform 1s;
}
</style>
