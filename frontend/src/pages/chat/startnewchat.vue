<template>
  <div class="full-screen d-flex flex-column align-items-center">
    <div
      class="container-start justify-content-center flex-column d-flex align-items-center"
    >
      <h3>Start New conversation</h3>
      <input v-model="text"  @keyup="search" type="text" class="form-control searchl" />
      <div class="afterl">
        <ul class="nav-item">
          <li v-for="item in users" :key="item.key">
            <router-link class="link" :to="'/chat/' + item.id">
              <div
                v-bind:class="$route.path == 'chat/' + item.id && 'active'"
                class="itemtabe d-flex "
              >
              <img width="50px" height="50px" :src="'http://localhost:8000/images/'+item.avatar" class="rounded-circle">
              <h6 class="mx-2 my-0 d-flex align-items-center text-left">

                {{ item.name }}
                <br>
                {{ item.email }}
              </h6>
              </div>
            </router-link>
              <hr class="m-1">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store/store";
export default {
  data() {
    return {
      users: store.state.users,
      text:''
    };
  },
  methods:{
      search(){
        //   console.log('hhh')
        this.users=  store.state.users.filter(i=>  i.name.toLowerCase().includes(this.text.toLowerCase()))
      }
  }
};
</script>

<style scoped>
.full-screen {
  height: 80vh;
  background-image: url('../../assets/chat.svg');
 
}
.container-start {
  height: 100%;
  width: 100%;
  max-width: 25rem;
  position: relative;
}
.searchl:focus ~ .afterl {
  display: block;
}
.afterl {
  position: absolute;
  width: 100%;
  height: 250px;
  overflow: auto;
  display: none;
  top: 61%;
  background: rgba(0, 0, 0, 0.425);
  border: 1px solid black;
  border-radius: 5px;
  z-index: 999;
}
.nav-item {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.itemtabe {
  padding: 15px;
  text-align: center;
  width: 100%;
  color: whitesmoke;

}

.itemtabe:hover{
    background: whitesmoke;
    color: #ff7900;
}
.link {
  text-decoration: none;
}
.active {
  background: #161616;
  color: orange;
}
.afterl:hover {
  display: block;
}
</style>


