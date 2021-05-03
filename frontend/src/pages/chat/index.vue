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
      <div class="col-10 p-0">

     <router-view/>
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
      msg: { name: "ahmad" },
      rooms:[]
    };
  },
  methods: {
     send() {
      let newData = db.database().ref('Users/'+ this.user.id +'/chats/1').push();
        newData.set({
            type: 'newmsg',
           
            name: this.chat,
            sendDate: Date()
        });
        this.chat = '';
    },
  },

 mounted () {
  
    db.database().ref('Users/'+ this.user.id +'/chats').on('value', (snapshot) => { 
      var items = []   
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        items.push(item)
      });
      this.rooms = items
    });
  }
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
</style>