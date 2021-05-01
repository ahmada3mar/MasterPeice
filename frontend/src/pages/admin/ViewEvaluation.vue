<template>
  <div class="bg-white p-2">
    <h3 class="text-primary text-center">Evaluation Result</h3>
    <div class="row m-2 mt-5">
      <div class="col-4">
        ID : <label class="text-primary">{{ temp.id }}</label>
      </div>
      <div class="col-4">
        Agility :
        <label class="text-primary">{{ temp.agility || "N/A" }}</label>
      </div>
      <div class="col-4">
        Team Work :
        <label class="text-primary">{{ temp.team_work || "N/A" }}</label>
      </div>
      <div class="col-4">
        Leadership Skill :
        <label class="text-primary">{{ temp.leadership_skill || "N/A" }}</label>
      </div>
      <div class="col-4">
        Time Management :
        <label class="text-primary">{{ temp.time_management || "N/A" }}</label>
      </div>
      <div class="col-4">
        Presentation Skills :
        <label class="text-primary">{{
          temp.presentation_skills || "N/A"
        }}</label>
      </div>
      <div class="col-4">
        Oral Expression :
        <label class="text-primary">{{ temp.oral_expression || "N/A" }}</label>
      </div>
      <div class="col-4">
        Quality Of The Answers :
        <label class="text-primary">{{
          temp.quality_of_the_answers || "N/A"
        }}</label>
      </div>
      <div class="col-4">
        Business Ethics :
        <label class="text-primary">{{ temp.business_ethics || "N/A" }}</label>
      </div>
      <div class="col-4">
        Note : <label class="text-primary">{{ temp.note || "N/A" }}</label>
      </div>

      <div
        v-if="temp.is_published"
        class="alert alert-success col-12 mt-2"
        role="alert"
      >
        <span class="alert-icon"><span class="sr-only">Success</span></span>
        <p>Published</p>
      </div>
    </div>
    <div
      class="border result border-warning p-2 m-2 ck"
      v-html="temp.evaluation || 'N/A'"
    />
    <div
      @click="$router.push('/admin/trainees/')"
      class="btn btn-primary my-4 mx-2 col-2 p-2 justify-content-center d-flex float-right"
    >
      Back
    </div>
       <div v-if="!temp.is_published"
      @click="$router.push('/admin/ViewEvaluation/edit')"
      class="btn btn-secondary  my-4 mx-2 col-2 p-2 justify-content-center d-flex float-right"
    >
      Edit
    </div>
  </div>
</template>


<script>
import { store } from "../../store/store";

export default {
  data() {
    return {
      temp: store.state.evaluation,
    };
  },
  mounted: function () {
    console.log(store.state.evaluation);
  },
 
};
</script>

<style >

.result{
  min-height: 200px;
}
</style>