<template>
  <div>
    <div class="accordion p-2 mb-2" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-2" role="tab">
          <b-button
            class="bg-white text-primary"
            block
            v-b-toggle.accordion-1
            variant="info"
            >Show All Information</b-button
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
                        <option
                          :selected="
                            user.education_level == 'High School' ? true : false
                          "
                          value="High School"
                        >
                          High School
                        </option>
                        <option
                          :selected="
                            user.education_level == 'Diploma' ? true : false
                          "
                          value="Diploma"
                        >
                          Diploma
                        </option>
                        <option
                          :selected="
                            user.education_level == 'Bachelor' ? true : false
                          "
                          value="Bachelor"
                        >
                          Bachelor
                        </option>
                        <option
                          :selected="
                            user.education_level == 'Master' ? true : false
                          "
                          value="Master"
                        >
                          Master
                        </option>
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
                    <option
                      :selected="user.gender == 'Male' ? true : false"
                      value="Male"
                    >
                      Male
                    </option>
                    <option
                      :selected="user.gender == 'Female' ? true : false"
                      value="Female"
                    >
                      Female
                    </option>
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
                      v-bind:src="'http://localhost:8000/images/' + user.avatar"
                      alt=""
                    />

                    <button
                      class="btn btn-primary mt-auto justify-content-center align-self-stretch"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

   

    <div class="m-2 p-0 bg-white">
      <b-card-body class="px-0">
        <form @submit="submit" id="traineesForm" enctype="multipart/form-data">
          <div class="row m-0 justify-content-between">
            <div class="col-12 col-lg-5">
              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
              </select>

              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>

              </select>

              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>

              </select>

              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>

              </select>

              
       
            
            </div>

             <div class="col-12 col-lg-5">
              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
              </select>

              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>

              </select>

              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>

              </select>

              <label class="mt-2" for="name">Full Name</label>
              <select name="agilty" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>

              </select>

              
       
            
            </div>
            

           
            <div class="col-12 col-lg-2">
              <div
                class="d-inline-flex flex-column  col-12 h-100 p-0"
              >
              <label >Note:</label>
               <textarea name="note"  class="p-0 flex-grow-1" ></textarea>
              </div>
            </div>
          </div>
        </form>
      </b-card-body>
    </div>
   
    <div  class="p-2  ">
      <ckeditor  :editor="editor" v-model="editorData"></ckeditor>
    </div>
    <div class="btn btn-primary my-4 mx-2 col-2 p-2 justify-content-center d-flex float-right">Submit</div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { store } from "../../store/store";

export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,

      img:
        "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
      user: store.state.users.filter((i) => i.id == this.$route.params.id)[0],
      editorData: "<p style='height:250px'></p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$router.push("/admin/trainees/edit/" + this.$route.params.id);
    },
    con(){
        console.log(this.editorData)
    }
  },
};
</script>

<style >
.ck-content{
    min-height: 500px !important;
}
</style>