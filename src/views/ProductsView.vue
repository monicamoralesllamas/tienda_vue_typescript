<template>
    <div>
      <h1>Esta es la futura pagina de productos</h1>
      <ProductShop></ProductShop>
    </div>
  </template>


<script lang="ts">
import { defineComponent } from 'vue';
import ProductShop from '@/components/ProductShop.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
   ProductShop
  },
});
</script>
  