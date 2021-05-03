<template>
    <div class="jumbtron-fluid ">
<div class="row m-0 ">
    <div class="col-2 d-flex flex-column flex-grow-1 bg-secondary">
     <ul class="nav-item">
    <li class="m-0 mt-1">
        <router-link class="link " to="/admin">
      <div v-bind:class="this.$route.path=='/admin' && 'active' " class="itemtabe">
        Dashboard
      </div>
        </router-link>
    </li>
    <li class="m-0 mt-1">
        <router-link class="link " to="/admin/trainees">
      <div v-bind:class="this.$route.path.startsWith('/admin/trainees') && 'active' " class="itemtabe">
        Manege Trainees
      </div>
        </router-link>
    </li>
    <li class="m-0 mt-1">
        <router-link class="link " to="/admin/admins">
      <div v-bind:class="this.$route.path.startsWith('/admin/admins') && 'active' " class="itemtabe">
        Manege Admins
      </div>
        </router-link>
    </li>
    <li class="m-0 mt-1">
        <router-link class="link " to="/admin/contents">
      <div v-bind:class="this.$route.path.startsWith('/admin/contents') && 'active' " class="itemtabe">
        Manege Content
      </div>
        </router-link>
    </li>
    <li class="m-0 mt-1">
        <router-link class="link " to="/admin/events">
      <div v-bind:class="this.$route.path.startsWith('/admin/events') && 'active' " class="itemtabe">
        Manege Events
      </div>
        </router-link>
    </li>
   
  </ul>
    </div>
    <div class="col-10 d-flex flex-column  p-2">

        <div style="height: 80vh;" class="border m-0 justify-content-end  d-inline-flex flex-column p-1">
          <div :key="chat" v-for="chat in chatBox" :class="chat.name == msg.name &&' align-self-end' ">
            <div :class="chat.name == msg.name ? ' bg-primary' : 'bg-info'" class="rounded-pill flex-row p-2 d-inline-flex my-1">
              <img height="25px" width="25px" class="rounded-circle " :src="'http://localhost:8000/images/'+user.avatar" alt=""/>
        <div class="mx-2 d-flex align-items-center">

          {{chat.name}}
        </div>
            </div>

          </div>

        </div>
        <div class="form-row m-0">

        

        <input v-model="chat" type="text" class="form-control col-11">
        <div  @click="send" class="btn btn-primary col-1 d-flex justify-content-center "><i class="fa fa-paper-plane"></i></div>
      
        </div>
    </div>
</div>
    </div>
</template>
<script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

<script>
import { store } from "../../store/store";

  var firebaseConfig = {
    apiKey: "AIzaSyAnsXd_15iE96cKYHLUB8siZ_uboxk2Fts",
    authDomain: "oca-master-piece.firebaseapp.com",
    projectId: "oca-master-piece",
    storageBucket: "oca-master-piece.appspot.com",
    messagingSenderId: "399587121611",
    appId: "1:399587121611:web:f2569ca1f8551e279ffe4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const usersCollection = db.collection('users')
export default {
 
    data(){
      return{
          user:store.state.user,
            chatBox:[] ,
            chat:"",
            msg:{name :'ahmad'}
        }
    },
    methods:{
      send(){
        this.chatBox.push({name:this.chat});
        this.chat = "" ;
        usersCollection.doc(user.uid).set({
    name: 'ahmad',
    title: 'hhhhh'
  })

      }
    }
    
}
</script>
<style scoped>

.nav-item{
   display: inline-flex;
  flex-direction: column;
  width: 100%;

}

.itemtabe{
  padding: 20px;
  text-align: center;
  width: 100%;
}
.link{
  text-decoration: none;
}
.active{
  background: #161616;
  color: orange;
}
</style>