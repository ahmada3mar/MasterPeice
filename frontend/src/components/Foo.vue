<template>
<div class="homcontainer d-flex">
<div class="left-sidedashboard bg-secondary">
 <Nav/>
</div>
<div class="content">
   <router-view/>
</div>
</div>
</template>

<script>

import {store} from "../store/store.js"
import Nav from "../components/Left-side-Nav"



export default {
  name: 'Foo',

  data(){
    return {
      store:store,
      data:""
    }
    },
    mounted:function(){
      !this.store.state.user.id ? this.$router.push('/login'):null;
    },
    components:{
      Nav
    }
}
</script>

<style scoped>
.left-sidedashboard{
  /* height: 100%; */
  width: 18%;
}
.incontent{
   display: inline-flex;
  flex-direction: column;
  width: 100%;
}
.content{
flex-grow: 1;
   height: 100%;
}

.homcontainer{
  flex-grow: 1;
}

</style>
