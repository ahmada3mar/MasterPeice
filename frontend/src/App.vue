

<template>
 <div  class="bodyfull d-flex flex-column flex-grow-1">
   <router-view ></router-view>
  
    </div>
   
 
</template>

<script>
// import Login from './components/Login.vue'

import {store} from "./store/store"
// import axios from "axios"

export default {
  name: 'App',
  data(){
    return{
      store:store
    }},

    
  
}
</script>

<style>

.bodyfull{
  height: 100vh;
  }
</style>
