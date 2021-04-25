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
          <div class="row m-0 justify-content-between">
            <div class="col-12 col-lg-5">
              <label class="mt-2" for="name">Full Name</label>
              <input id="name" name="name" type="text" class="form-control" />
              <label class="mt-2" for="email">E-Mail</label>
              <input id="email" name="email" type="text" class="form-control" />

            </div>

            <div class="col-12 col-lg-5">
            
              <label for="mob" class="mt-2">Mobile No.</label>
              <input id="mobile" name="mobile" type="tel" class="form-control" />
              <label class="mt-2">Role</label>
             <select name="education" id="education" class="form-control">
                    <option value="2">Admin</option>
                    <option value="1">Job Coach</option>
                   
                  </select>
              
            </div>
            <div class="col-12 col-lg-2">

              <div class="d-inline-flex flex-column col-12 h-100 align-items-center">


                  <img class="col-8 col-lg-auto mt-3 " src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="">
                    <div class="custom-file my-3">

                    <input type="file" class="custom-file-input" id="validatedCustomFile" aria-describedby="customFileValidationFeedback" required>
                    <label class="custom-file-label" for="validatedCustomFile"></label>
   
                     </div>

                <div class="btn btn-primary mt-auto  justify-content-center align-self-stretch">Submit</div>
              </div>
              
              
             
            </div>
          </div>
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
         
          :current-page="currentPage"
        >
         <template v-slot:cell(actions)="data">
            <b-button variant="warning mx-1" @click="deleteItem(data.item.id)">View</b-button>
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
  </div>
</template>

<script>


export default {
 data() {
   return {
      perPage: 10,
      currentPage: 1,
      filter:'',
       fields: ["userId", "id", "title", "actions"],
    posts: [
     {
     
      id: 1,
      title: "sunt aut facere repellat provident occaecati",
     },
     {
     
      id: 2,
      title: "qui est esse",
     },
     {
     
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui",
     },
     {
     
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui",
     },
     
    ],
   };
  },

  methods: {
    deleteItem(id) {
      const index = this.posts.indexOf((x) => x.id === id);
      this.posts.splice(index, 1);
    },
    
  },
  computed: {
    rows() {
      return this.posts.length;
    },
  },

 
};
</script>
