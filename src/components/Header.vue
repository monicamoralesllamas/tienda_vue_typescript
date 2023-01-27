<template>
     <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">Loggin</a>
    </nav>
  </header>
</template>
  
<script lang="ts">
    export default {
      data() {
        return {
          title: "My Header"
        }
      }
    }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #eee;
  padding: 20px;
}
</style>
  