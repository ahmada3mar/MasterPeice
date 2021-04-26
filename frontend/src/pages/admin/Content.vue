<template>
  <div class="row m-0 justify-content-between bg-white p-5 col-12">
    <div class="col-12">
      <h1>Manege Content</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >Content</label
          >
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <label class="mt-2" for="name">Title</label>
      <input type="text" class="form-control" />

      <label class="mt-2" for="name">Description</label>
      <textarea style="height: 200px" class="form-control"></textarea>
    </div>
    <div class="col-12 my-4 align-items-center d-flex flex-column col-md-3">
      <img class="col-12 px-0" v-bind:src="img" />
      <input @change="updateimg" type="file" class="form-control col-12 px-0" />
    </div>

    <div class="col-12">
      <div class="btn btn-primary col-12 d-inline-flex justify-content-center">
        Submit
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            img:'https://media.fdmckosovo.org/2020/07/placeholder.png'
        }
    },
    methods:{
        updateimg(e){
           const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onloadend = () => {
                  this.img = reader.result
              };        
          }
        }
     }

</script>