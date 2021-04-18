<template>
<div>

    <h1 v-if="store.state.user.id">
{{store.state.user}}
        </h1>
        <h1 v-else>Loding....</h1>
</div>
</template>

<script>

import {store} from "../store/store.js"


export default {
  name: 'Foo',

  data(){
    return {
      store:store,
      data:""
    }
    },
    mounted:function(){
      !this.store.state.user.id ? this.$router.push('/'):null;
    }
}
</script>
