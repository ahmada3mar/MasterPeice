<template>
  <div>
    <div class="bodyfull d-flex flex-column flex-grow-1">
      <Navbar />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
// import Login from './components/Login.vue'

import { store } from "./store/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      store: store,
    };
  },
  components: { Navbar, Footer },
  mounted: function () {
    axios
      .post("http://localhost:8000/getcontent")
      .then((res) => {
        store.state.contents = res.data.content;
        store.state.events = res.data.events;

      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.bodyfull {
  height: 100vh;
}
</style>
