<template>
<div>

  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch modal demo
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <!-- Boosted mod: using visually hidden text instead of aria-label -->
        <button type="button" class="close" data-dismiss="modal">
          <span class="sr-only">Close live modal demo</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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

    };
  },
  methods: {
    login: function () {
      axios
        .post("http://localhost:8000/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.store.state.user = res.data;
          this.$router.push("/foo");
        });
    },
    test: function () {
      axios
        .post("http://localhost:8000/logout")
        .then(() => (this.store.state.user = {}));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
