<template>
<div class="home">
   
  <h2 class="welcome">WELCOME!</h2>
 
  <p></p>

   <!-- LOGIN PARA ENTRAR EN LA PP -->

   <div class="containerLogin">
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {
   
  },
});
</script>

<style scoped>

* {
  margin: 0px;
  padding: 10px;
}
.containerLogin{
  background-color: bisque;
  display: flex;
  justify-content: space-between;

  

}

.welcome{
  display: flex;
  justify-content:center;
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
}
</style>
