<template>
  <div class="jumbtron-fluid">
    <div class="row m-0">
      <div class="col-2 d-flex flex-column flex-grow-1 bg-secondary">
        <ul class="nav-item">
         <li v-for="room in rooms" :key="room.key" class="m-0 mt-1">
            <router-link class="link" v-bind:to="'/chat/' + room.key">
              <div
                
                class="itemtabe"
              >
                {{room.key}}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-10 d-flex flex-column p-2">
        <div
          style="height: 80vh"
          class="border m-0 justify-content-end d-inline-flex flex-column p-1 "
        >
        <div id='box' class="box overflow-auto px-2">

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
                :src="'http://localhost:8000/images/' + user.avatar"
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
        document.getElementById('box').scrollTo(0,1000)
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
      this.chatBox = items
      console.log(this.chatBox)
    });
  },
  watch: {
    '$route.params.id': function (id) {
      db.database().ref('Users/'+ this.user.id +'/chats/'+ id.toString()).on('value', (snapshot) => { 
      var items = []   
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        items.push(item)
      });
      this.chatBox = items
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