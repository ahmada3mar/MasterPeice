<template>
  <div
    v-if="!store.state.user.id && !store.state.loading"
    class="bodyfull row flex-grow-1 m-0"
  >
    <div class="left-side bodyfull col-12 col-md-4 p-0">
      <div style="padding: 50px 35px">
        <img width="70" src="../assets/logo.png" alt="Orange Logo" />
        <h1 class="mt-5">
          Think Twice Code Once! <br />
          believe yourself
        </h1>
        <h1 class="text-primary">Orange Coding Academy</h1>
        <p>
          Watch exclusive series, Hollywood movies, Arabic series, kids’ shows,
          documentaries and more.
        </p>
        <a href="#login" class="btn btn-primary">Login</a>
      </div>
    </div>

    <div
      class="right-side bodyfull d-inline-flex align-items-center justify-content-center col flex-column col-12 col-md-8"
    >
      <div id="login" class="form col-8  ">
        <h2 class="mb-5">
          Sign in to <span class="text-primary">Orange</span>
        </h2>
        <div class="d-flex flex-column-reverse mb-3">
          <input v-model="email" type="email" class="form-control" id="email" />
          <label id="labelEmail" htmlFor="email">Email</label>
        </div>
        <div class="d-flex flex-column-reverse mb-3">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
          />
          <label id="labelpassword" htmlFor="password">Password</label>
        </div>
        <div
          v-on:click="login"
          class="btn btn-primary col-12 justify-content-center mb-3"
        >
          Login
        </div>

        <router-link to="/foo">Forget Password ?</router-link>
      </div>
    </div>
    <div>
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
              <h5 class="modal-title" id="exampleModalLabel">Faild</h5>
              <!-- Boosted mod: using visually hidden text instead of aria-label -->
              <button type="button" class="close" data-dismiss="modal">
                <span class="sr-only">Close live modal demo</span>
              </button>
            </div>
            <div class="modal-body">{{ content }}</div>
            <div class="modal-footer">
       
              <button
                @click="show = !show"
                type="button"
                class="btn btn-primary"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="show" class="modal-backdrop fade show"></div>
    </div>
  </div>
  <div v-else class="d-flex h-100 align-items-center justify-content-center">
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
</template>

<script>
import { store } from "../store/store.js";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      store: store,
      email: "",
      password: "",
      show: false,
      content: "",
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:8000/getuser")
      .then((res) => {
        if (res.data.id) {
          store.state.user = res.data;
          this.fetchUsers()
          store.state.user.is_admin
             ? this.$router.push("/admin")
            : this.$router.push("/trainee");
        }
      })
      .catch(() => (store.state.loading = false));
  },
  methods: {
    login: function () {
      axios
        .post("http://localhost:8000/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          store.state.user = res.data;
          this.fetchUsers()
          store.state.user.is_admin
            ? this.$router.push("/admin")
            : this.$router.push("/trainee");
            
        })
        .catch((err) => {
          this.show = true;
          this.content = "UserName or password are incorrect";
          console.log(err);
        });
    },
      fetchUsers: function () {
    axios
      .post("http://localhost:8000/getTrainee")
      .then((res) => (store.state.users = res.data))
      .catch((err) => console.log(err))
      
      ;
  },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
html {
  scroll-behavior: smooth;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.left-side {
  background-image: url("https://www.orange.jo/SSologin/SSOContent/PublishingImages/osn.png");
  color: white;
  background-size: cover;
  background-position: center;
}

#email:focus {
  border: orange 2px solid;
}
#email:focus ~ #labelEmail {
  color: orange;
}

#password:focus {
  border: orange 2px solid;
}
#password:focus ~ #labelpassword {
  color: orange;
}
</style>
