<template>
<div class="bg-white p-2">
<h3 class="text-primary text-center">Evaluation Result</h3>
    <div class="border border-warning p-2 m-2" v-html="temp" />
     <div @click="$router.go(-1)" class="btn btn-primary my-4 mx-2 col-2 p-2 justify-content-center d-flex float-right">Back</div>
</div>
</template>


<script>
import {store} from "../../store/store"
export default {
    data(){
        return{
            temp:store.state.evaluation
        }
    } , 
    mounted:function(){
        console.log(store.state.evaluation)
    }
}
</script>