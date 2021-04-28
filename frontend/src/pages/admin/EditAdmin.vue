<template>
      <form
              @submit="submit"
              id="traineesForm"
              enctype="multipart/form-data"
            >
          <div class="row m-0 justify-content-between">
        
            <div class="col-12 col-lg-5">
              <label class="mt-2" for="name">Full Name</label>
            
              <input id="name" name="name" required type="text" v-bind:value="user.name" class="form-control" />
              <label class="mt-2"  for="email">E-Mail</label>
              <input id="email" placeholder="somone@example.com" v-bind:value="user.email" name="email" type="email" required class="form-control" />

            </div>

            <div class="col-12 col-lg-5">
            
              <label for="mob" class="mt-2">Mobile No.</label>
              <input id="mobile" name="mobile" type="tel" v-bind:value="user.mobile" pattern="[0]{1}[7]{2}[0-9]{7}" required placeholder="077XXXXXXX" class="form-control" />
              <label class="mt-2">Role</label>
             <select name="is_admin"  class="form-control">
                 
                    <option v-if="user.is_admin == 2" selected value="2">Admin</option>
                    <option v-else value="2">Admin</option>
                    <option v-if="user.is_admin == 1" selected value="2">Job Coach</option>
                    <option v-else value="2">Admin</option>
                    
                   
                  </select>
              
            </div>
            <div class="col-12 col-lg-2">

              <div class="d-inline-flex flex-column col-12 h-100 align-items-center">


                  <img class="col-8 col-lg-auto mt-3 "  v-bind:src="img" alt="">
                    <div class="custom-file my-3">

                    <input @change="updateimg" type="file" name="avatar" class="custom-file-input"  id="validatedCustomFile" aria-describedby="customFileValidationFeedback" >
                    <label class="custom-file-label" for="validatedCustomFile"></label>
   
                     </div>

                <button class="btn btn-primary mt-auto  justify-content-center align-self-stretch">Submit</button>
              </div>
              
              
             
            </div>
          </div>
            </form>
</template>


<script>
import {store} from "../../store/store"
import axios from "axios"
export default {
    data(){
        return{
            user:store.state.users.filter(i=>i.id==this.$route.params.id)[0] ,
            img : 'http://localhost:8000/images/' + store.state.users.filter(i=>i.id==this.$route.params.id)[0].avatar
        }
    },
    methods:{
         submit(e) {
      e.preventDefault();
      var data = new FormData(document.getElementById("traineesForm"));
      axios
        .post("http://localhost:8000/edituser/"+this.user.id, data)
        .then((res) =>{
           store.state.users[store.state.users.findIndex(i=>i.id==this.user.id)] = res.data ;
            console.log(store.state.users)
            this.$router.push("/admin/admins")
        })
        .then((err) => console.log(err));
    },
    updateimg(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        this.img = reader.result;
      };
    },
    }
}
</script>