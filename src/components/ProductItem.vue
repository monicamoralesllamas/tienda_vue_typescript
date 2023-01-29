<template>
  <div class="product-item">
    <div class="product-images">
      <img :src="product.images[0]" :alt="product.title" />
    </div>
    <div class="product-info">
      <div class="product-title">{{ product.id}}{{ product.title }}</div>
      <div class="product-description">{{ product.description }}</div>
      <div  class="product-price">{{ product.price }}</div>
      <div class="buttons">
        <button class="btn btn-sm btn-success" @click="$emit('goDetail', product)">
         MORE DETAIL PRODUCT
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "../models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  width: 300px;
  display: flex;
  border: 1px solid black;
}

.product-images {
  width: 50%;
}
.product-images > img {
  width: 100%;
  height: auto;
}
</style>
