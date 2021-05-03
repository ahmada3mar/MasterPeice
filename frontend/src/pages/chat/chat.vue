<template>
  <div class="jumbtron-fluid d-inline-flex">
    <div class="row m-0">
   
      <div class="col-9 d-flex flex-column p-0">
        <div
          style="height: 80vh"
          class="border m-0 justify-content-end d-inline-flex flex-column p-1 "
        >
        <div id='box' class="box overflow-auto px-2 d-flex flex-column-reverse">

          <div
            :key="chat"
            v-for="chat in chatBox"
            :style="chat.sender == user.name && ' display:grid'"
          >
            <div
                style="justify-self:end"
              :class="chat.sender == user.name ? ' bg-primary' : 'bg-info'"
              class="rounded-pill flex-row p-2 d-inline-flex my-1"
            >
              <img
                height="25px"
                width="25px"
                class="rounded-circle"
                :src=" chat.sender == user.name ? 'http://localhost:8000/images/' + user.avatar : 'http://localhost:8000/images/' + recever.avatar"
                alt=""
              />
              <div class="mx-2 d-flex align-items-center">
                {{ chat.name }}
              </div>
        </div>
            </div>
          </div>
        </div>
        <div class="form-row m-0">
          <input v-model="chat" type="text" class="form-control col-11" />
          <div
            @click="send"
            class="btn btn-primary col-1 d-flex justify-content-center"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
        </div>
      </div>
        
          
          <div class="d-flex flex-column col-3  align-items-center p-2 bg-light  ">
           


<div class="col-12">


                  <img class="col-12 mb-2" :src=" 'http://localhost:8000/images/' +  recever.avatar "  alt="">
                  <div class="col-12 d-flex flex-column">

                    <label ><i class="fa mx-1 fa-user"></i>{{recever.name}}</label>
                    <label ><i class="fa mx-1 fa-mobile"></i>{{recever.mobile}}</label>
                    <label ><i class="fa mx-1 fa-envelope"></i>{{recever.email}}</label>
                    <label ><i class="fa mx-1 fa-map-marker"></i>{{recever.address}}</label>
                  </div>
</div>
                    
        
            
                  
          </div>
      
      
    
    </div>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

<script>
import { store } from "../../store/store";
import { db} from "../../firebase/db";

// import admin from "firebase-admin";

export default {
  data() {
    return {
      user: store.state.user,
      recever:store.state.users.filter(i=>i.id == this.$route.params.id)[0],
      store:store,
      chatBox: [],
      chat: "",
      rooms:[]
    };
  },
  methods: {
     send() {
         let msg = {
            type: 'newmsg',
            sender:this.user.name,
            name: this.chat,
            sendDate: Date()
        };
        
      let newData = db.database().ref('Users/'+ this.user.id +'/chats/'+this.$route.params.id).push();
        newData.set(msg);
        newData = db.database().ref('Users/'+ this.$route.params.id +'/chats/'+this.user.id).push();
        newData.set(msg);
        this.chat = '';
    },
  },

 mounted () {
  
    db.database().ref('Users/'+ this.user.id +'/chats').on('value', (snapshot) => { 
      var items = []   
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        item.sender = doc.sender
        
        items.push(item)
      });
      this.rooms = items
  
    });
    db.database().ref('Users/'+ this.user.id +'/chats/'+ this.$route.params.id.toString()).on('value', (snapshot) => { 
      var items = []   
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        items.push(item)
      });
      this.chatBox = items.reverse()
      
     
     
      
    });
  },
  watch: {
    '$route.params.id': function (id) {
     this.recever=this.store.state.users.filter(i=>i.id == this.$route.params.id)[0]
      db.database().ref('Users/'+ this.user.id +'/chats/'+ id.toString()).on('value', (snapshot) => { 
      var items = []   
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        items.push(item)
      });
      this.chatBox = items.reverse()
      // this.chatBox = items
      // this.chatBox.reverse()
      
      
    });
    }
  },
};
</script>
<style scoped>
.nav-item {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.itemtabe {
  padding: 20px;
  text-align: center;
  width: 100%;
}
.link {
  text-decoration: none;
}
.active {
  background: #161616;
  color: orange;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #161616; 
  border-radius: 10px;
}


::-webkit-scrollbar-thumb:hover {
  background: #af5200; 
}
</style>