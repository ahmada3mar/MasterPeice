

<template>
 <div class="bodyfull d-flex flex-column flex-grow-1">
    <Login/>
    </div>
   
 
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>

.bodyfull{
  height: 100vh;
  }
</style>
