<template>
  <div class="background">
    <div class="row m-0 p-md-5 p-0 justify-content-between mb-5">
      <div class="col-12 col-md-6 align-items-center d-inline-flex">
        <div class="py-4">
          <h1 class="title font-weight-bold">Contact Us</h1>
          <h3 class="description mt-2">
            Stay in touch and updated, feel free to ask if you have any further
            questions and we will make sure to cover your questions and
            concerns.
          </h3>
        </div>
      </div>
      <div class="col-6 d-none d-md-block">
        <img class="col-12" src="../../assets/contactUs.png" alt="Contact Us" />
      </div>
    </div>

    <div class="row m-0 p-md-5 p-0 justify-content-around mb-5">
      <div class="form col-5">
        <div class="d-flex flex-column-reverse mb-3">
          <input type="text" class="form-control" v-model="name" id="name" />
          <label id="labelname" htmlFor="name">Full Name</label>
        </div>
        <div class="d-flex flex-column-reverse mb-3">
          <input type="email" class="form-control" v-model="email" id="email" />
          <label id="labelEmail" htmlFor="email">Email</label>
        </div>
        <div class="d-flex flex-column-reverse mb-3">
          <input
            type="number"
            class="form-control"
            v-model="mobile"
            id="number"
          />
          <label id="labelnumber" htmlFor="number">Mobile</label>
        </div>

        <div class="d-flex flex-column-reverse mb-3">
          <select class="form-control" v-model="city" id="exampleSelect1">
            <option>Amman</option>
            <option>Irbid</option>
          </select>
          <label id="labeloption" htmlFor="number">Governorate</label>
        </div>
        <div
          @click="send"
          class="btn btn-primary col-12 justify-content-center mb-3"
        >
          Submit
        </div>
      </div>
      <div class="col-5 d-flex flex-column">
        <div class="d-flex flex-column-reverse mb-3">
          <select v-model="subject" class="form-control" id="exampleSelect1">
            <option>Soft Skills</option>
            <option>Digital Skills</option>
            <option>Innovation</option>
            <option>Entrepreneurship</option>
            <option>Sales Skills</option>
            <option>Coding</option>
          </select>
          <label id="labeloption" htmlFor="number">Subject</label>
        </div>
        <div class="d-flex flex-column-reverse mb-3 flex-grow-1">
          <textarea
            v-model="message"
            class="form-control flex-grow-1"
            id="email"
          ></textarea>
          <label id="labelEmail" htmlFor="email">Message</label>
        </div>
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
          <div class="modal-body">your Message sent successfully</div>
          <div class="modal-footer">
            <button @click="show = !show" type="button" class="btn btn-primary">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show" class="modal-backdrop fade show"></div>
    <div
      v-if="is_loadind"
      class="modal-backdrop fade show d-flex justify-content-center align-items-center"
    >
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Tchnologies",
  data() {
    return {
      name: "",
      message: "",
      city: "",
      mobile: "",
      email: "",
      subject: "",
      show: false,
      is_loadind: false,
    };
  },
  methods: {
    send() {
      this.is_loadind = true;
      var data = {
        name: this.name,
        publicmessage: this.message,
        city: this.city,
        mobile: this.mobile,
        email: this.email,
        subject: this.subject,
      };
      // console.log(this)
      axios
        .post("http://localhost:8000/contactus", data)
        .then((res) => {
          this.is_loadind = false;
          this.show = res.data;
        })
        .then(() => {
          this.name = "";
          this.message = "";
          this.city = "";
          this.mobile = "";
          this.email = "";
          this.subject = "";
        });
    },
  },
};
</script>

<style scoped>
.background {
  background: url("../../assets/background.svg") no-repeat;
  background-size: cover;
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 40px;
  flex-wrap: wrap;
  height: 85vh;
}
.paraghraph {
  width: 50vw;
}
.images {
  width: 30vw;
  height: 70%;
}

.title {
  font-weight: 800;
  color: #ff7900;
}
.description {
  font-weight: 300;

  color: rgb(255, 255, 255);
}

#email:focus,
#name:focus,
#number:focus,
select:focus {
  border: #ff7900 2px solid;
  box-shadow: 0 0 0 0;
}
#email:focus ~ #labelEmail,
#name:focus ~ #labelname,
#number:focus ~ #labelnumber,
select:focus ~ #labeloption {
  color: #ff7900;
}
</style>
