

<template>
  <div class="bodyfull d-flex flex-column flex-grow-1">
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/Login.vue'

import { store } from "./store/store";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      store: store,
    };
  },

  mounted: function () {
    axios.get("http://localhost:8000/getuser").then((res) => {
      if (res.data.id) {
        store.state.user = res.data;
        this.$router.push("/foo");
      }
     
    }).catch(()=> store.state.loading = false)
    ;
  },
};
</script>

<style>
.bodyfull {
  height: 100vh;
}
</style>
