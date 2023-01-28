<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from "./components/NavBar.vue"


export default defineComponent({
    name: 'AppComponent',
    components : {
      NavBar ,
    }
})
</script>


<style>
#app {
  color: #2c3e50;
 
}

</style>
