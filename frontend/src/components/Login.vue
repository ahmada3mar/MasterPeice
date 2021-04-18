<template>


   <div class="row h-100 flex-grow-1 m-0">
        

            <div class="left-side  col-4 p-0">
                <div style="padding:50px 35px">
                    <img width="70" src="../assets/logo.png" alt="Orange Logo" />
                    <h1 class="mt-5">Think Twice Code Once! <br /> believe yourself</h1>
                    <h1 class="text-primary">Orange Coding Academy</h1>
                    <p>Watch exclusive series, Hollywood movies, Arabic series, kids’ shows, documentaries and more.</p>
                    <div class="btn btn-primary">Discover More</div>
                </div>
            </div>

            <div class="right-side d-inline-flex align-items-center justify-content-center col flex-column">                
                <div class="form col-8">
                    <h2 class="mb-5">Sign in to <span class="text-primary">Orange</span></h2>
                    <div class="d-flex flex-column-reverse  mb-3">
                        <input v-model="email" type="email"  class="form-control" id="email" />
                        <label id="labelEmail" htmlFor="email">Email</label>
                    </div>
                    <div class="d-flex flex-column-reverse  mb-3">
                        <input v-model="password"  type="password" class="form-control" id="password" />
                        <label id="labelpassword" htmlFor="password">Password</label>
                    </div>
                    <div v-on:click="login"  class="btn btn-primary col-12 justify-content-center  mb-3">Login</div>
                    <div v-on:click="test"  class="btn btn-primary col-12 justify-content-center  mb-3">{{store.state.count}}</div>
                    <Link class="text-primary" to="#">Forget Password ?</Link>
                    <router-link to="/foo">Go to Foo</router-link>
                </div>
         </div>
            </div>


</template>

<script>
import {store} from "../store/store.js"
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data(){
    return {
      store:store,
      email:"",
      password:""
    }
    },
    methods:{
      login:function(){
      
      axios.post('http://localhost:8000/login',{email:this.email , password:this.password}).then(
        (res)=>{this.store.state.user=res.data;this.$router.push('/foo')}
     
      )
      },
      test:function (){
        axios.post("http://localhost:8000/logout").then(()=>this.store.state.user={})

        }
      }
    
          
          
  
}
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
.left-side{

  background-image: url('https://www.orange.jo/SSologin/SSOContent/PublishingImages/osn.png');
  color :white;
  background-size:cover;
  background-position: center;
  
}


#email:focus{
  border: orange 2px solid;
}
#email:focus ~ #labelEmail{
  color: orange;
}

#password:focus{
  border: orange 2px solid;
}
#password:focus ~ #labelpassword{
  color: orange;
}

</style>
