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

<style >

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: #ff7900; 
  border-radius: 10px;
}


</style>
