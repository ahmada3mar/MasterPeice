<template>
  <div class="row m-0 justify-content-between  p-2 col-12">
    <form @submit="submit" id="contentForm" class="bg-white my-4 p-3 col-12" enctype="multipart/form-data">
      <div class="col-12">
        <h1>Manege Content</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01"
              >Content</label
            >
          </div>
          <select name="name" class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="home_banner">Home Slider</option>
            <option value="announcement_box">Announcement Box</option>
            <option value="technologeis_cover">Technologies Page Cover</option>
            <option value="technologeis_cards">Technologies Page Cards</option>
            <option value="contact_us_cover">Contact Us Page Cover</option>
            <option value="about_us_cover">About Us Page Cover</option>
            <option value="about_us_paragraph">About Us Page Paragraphs</option>
          </select>
        </div>

        <label class="mt-2" for="name">Title</label>
        <input v-model="name" name="title" type="text" class="form-control" />

        <label class="mt-2" for="name">Description</label>
        <textarea
          name="description"
          style="height: 200px"
          class="form-control"
          v-model="description"
        ></textarea>
      </div>
      <div class="col-12 my-4 align-items-center d-flex flex-column col-md-3">
        <img  name="image" class="col-12 px-0" v-bind:src="img" />
        <input
          @change="updateimg"
          type="file"
          class="form-control col-12 px-0"
          name="image"
          
        />
      </div>

      <div class="col-12">
        <button
          class="btn btn-primary col-12 d-inline-flex justify-content-center"
        >
          Submit
        </button>
      </div>
    </form>
   
    <div class="p-3 bg-white col-12 ">
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
            <template #cell(image)="data">
              <img  v-bind:src="'http://localhost:8000/images/'+data.item.image" alt="">
            </template>

            <template v-slot:cell(actions)="data">
             <router-link v-bind:to="'trainees/edit/' + data.item.id">
            <b-button variant="danger mx-1" >Edit</b-button>
            </router-link>
              <b-button variant="danger mx-1" @click="deleteItem(data.item.id)"
                >Delete</b-button
              >
            </template>
          </b-table>
          <div
            v-else
            class="d-flex h-100 align-items-center justify-content-center"
          >
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
import axios from "axios"
import {store} from "../../store/store"
export default {
  data() {
    return {
       perPage: 10,
      currentPage: 1,
      filter: "",
      store:store,
      name:'',
      description:'',

       fields: [
		"id",
        "image",
        "name",
        "title",
        "description",
        "actions"
      
      ],
      posts: [],
      img: "https://media.fdmckosovo.org/2020/07/placeholder.png",
    };
  },
  methods: {
    updateimg(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        this.img = reader.result;
      };
    },
    submit(e) {
      e.preventDefault();
      var data = new FormData(document.getElementById("contentForm"));
      axios
        .post("http://localhost:8000/addcontent", data)
        .then((res) => {
        
        store.state.contents.push(res.data);
        this.img= "https://media.fdmckosovo.org/2020/07/placeholder.png";
        this.name ='' ;
        this.description=''
        })
        .then((err) => console.log(err));
    },
      deleteItem(id) {
      axios.post('http://localhost:8000/deleteuser/' +  id).then(()=>{
        var index =  store.state.users.findIndex((x) => x.id == id);
         store.state.users.splice(index, 1);
         index = this.posts.findIndex((x) => x.id == id);
         this.posts.splice(index, 1);
        }
      )
    },
    
  },
   computed: {
    rows() {
      return this.posts.length;
    },
  },
    mounted: function () {
      this.posts = this.store.state.contents
      
  },
};
</script>