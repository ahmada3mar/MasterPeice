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
        <div class="row m-0 justify-content-between">
          <div class="col-12 col-lg-5">
            <label class="mt-2" for="name">Agility</label>
            <select v-model="data.agility" name="agility" class="form-control">
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>

            <label class="mt-2">Leadership skill</label>
            <select
              v-model="data.leadership_skill"
              name="leadership_skill"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>

            <label class="mt-2" for="name"
              >Ability to convince others through oral expression</label
            >
            <select
              v-model="data.oral_expression"
              name="oral_expression"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>

            <label class="mt-2" for="name">Quality of the answers</label>
            <select
              v-model="data.quality_of_the_answers"
              name="quality_of_the_answers"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>
          </div>

          <div class="col-12 col-lg-5">
            <label class="mt-2" for="name">Team work</label>
            <select
              v-model="data.team_work"
              name="team_work"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>

            <label class="mt-2" for="name">Time management</label>
            <select
              v-model="data.time_management"
              name="time_management"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>

            <label class="mt-2" for="name">Presentation skills</label>
            <select
              v-model="data.presentation_skills"
              name="presentation_skills"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>

            <label class="mt-2" for="name">Commit with a business ethics</label>
            <select
              v-model="data.business_ethics"
              name="business_ethics"
              class="form-control"
            >
              <option value="proactive">Proactive</option>
              <option value="initiative">Initiative</option>
              <option value="adaptable">Adaptable</option>
            </select>
          </div>

          <div class="col-12 col-lg-2">
            <div class="d-inline-flex flex-column col-12 h-100 p-0">
              <label>Note:</label>
              <textarea
                v-model="data.note"
                name="note"
                class="p-0 flex-grow-1"
              ></textarea>
            </div>
          </div>
        </div>
      </b-card-body>
    </div>

    <div class="p-2">
      <ckeditor
        :config="editorConfig"
        :editor="editor"
        v-model="data.evaluation"
      ></ckeditor>
    </div>

    <div class="custom-control custom-switch px-2">
      <input
        v-model="data.is_published"
        type="checkbox"
        class="custom-control-input"
        id="customSwitch1"
      />
      <label class="custom-control-label pl-5" for="customSwitch1"
        ><span class="pl-2">Published</span>
      </label>
    </div>
    <div class="row px-2 justify-content-end">
      <div
        @click="save"
        class="btn btn-primary my-4 mx-2 col-2 p-2 justify-content-center d-flex"
      >
        Submit
      </div>
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
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { store } from "../../store/store";

export default {
  data() {
    return {
      
      editor: ClassicEditor,
      perPage: 10,
      currentPage: 1,
      filter: "",
       editorConfig: {
      
    },
                
        
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
      data: { user_id: this.$route.params.id },

      img:
        "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
      user: store.state.users.filter((i) => i.id == this.$route.params.id)[0],
      editorData: "<p style='height:250px'></p>",
      
    };
  },
   computed: {
    rows() {
      return this.posts.length;
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$router.push("/admin/trainees/edit/" + this.$route.params.id);
    },
    save() {
      axios.post('http://localhost:8000/addevaluation', this.data)
      .then(res=> this.posts.push(res.data) )
     
    },
    view(i) {
      store.state.evaluation = i;
      this.$router.push("/admin/ViewEvaluation");
    },
  },

  mounted: function () {
    axios
      .post("http://localhost:8000/getevaluation/" + this.$route.params.id)
      .then((res) => (this.posts = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style >
.ck-content {
  min-height: 500px !important;
}
</style>