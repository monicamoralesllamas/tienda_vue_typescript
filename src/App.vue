<template>
  <div class="containerApp">
    <NavBar></NavBar>
    <br>
    <router-view/>
    <FooterShop></FooterShop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from "./components/NavBar.vue"
import FooterShop from './components/FooterShop.vue';

export default defineComponent({
    name: 'AppComponent',
    components : {
      NavBar ,
      FooterShop,
    }
})
</script>


<style>
#app {
  display: flex;
  justify-content: center;
  color: #2c3e50;
  background-color: beige;
  width: 100%; 
  height: 100%;
  
}

</style>
