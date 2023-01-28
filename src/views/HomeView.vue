<template>
  <div class="home">
   <p>¡BIENVENIDO!</p>
   <ProductShop></ProductShop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductShop from "../components/ProductShop.vue"

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductShop,
  },
});
</script>
