<template>
  <div>
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
      <ckeditor :editor="editor" v-model="data.evaluation"></ckeditor>
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
        Update
      </div>
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
          <div class="modal-body">Evaluation Updated Successfully</div>
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
      editorData: "<p style='height:250px'></p>",
      data: store.state.evaluation,
      show: false,
    };
  },
  mounted: function () {
    console.log(store.state.evaluation);
  },
  methods: {
    save() {
      axios
        .post("http://localhost:8000/editevaluation/" + this.data.id, this.data)
        .then(() => (this.show = true));
    },
  },
};
</script>

<style >
.ck  ul{
    list-style-type: disclosure-closed  !important;
}
.ck  li{
    display: list-item !important;
}

.ck table{
    width: 100%;
}
figure.table{
  overflow: auto;
}
</style>