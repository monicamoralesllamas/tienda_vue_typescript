<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MONISHOP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PRODUCTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PROFILE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">LOG OUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- <div> //ANTIGUA NAVBAR
    <nav>
      <div class="nav-brand">MONISHOP</div>
      <div class="nav-links">
        <a href="../views/ProductsView.vue">Productos</a>
        <a href="#">Perfil</a>      
      </div>
    </nav>
  </div> -->
</template>

<script lang="ts">
export default  {
 name: "NavBar"
  }

</script>

<style scoped>

</style>