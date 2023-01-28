<template>
  <div class="containerNavbar">
    <nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" >SHOPSHOP</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" >HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/productos" class="nav-link" >PRODUCTOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/perfil" class="nav-link" >PERFIL</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" tabindex="-1" aria-disabled="true">LOG OUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script lang="ts">
export default  {
 name: "NavBar"
  }

</script>

<style scoped>

.containerNavbar{
  justify-content: space-around;
}

.navbar-brand{
  color: rgb(124, 52, 192);
}
</style>
