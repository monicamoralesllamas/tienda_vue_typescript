<template>
    <div class="product">
      <div v-if="!isLoading" class="detailView">
      <CustomCard>
        <template v-slot:image>
                    <div v-if="!activePic" class="profile">
                        <div class="picture"><img :src="product.images[0]" class="card-img-top" alt=""></div>
                    </div>
                    <div v-else>
                        <div class="picture"><img :src="activePic" class="card-img-top" alt=""></div>
                    </div> 
                    <div class="pictures">
                        <div v-for="(image, index) in product.images" :key="index">
                                <img :src=image class="card-img-top" @click="changeActivePic(index)">
                        </div>
                    </div>
                </template>
                <template v-slot:header>
                    <h2 class="product-title">{{ product.id }}. {{ product.title }}</h2>
                </template>
                <template v-slot:body>
                    <p class="product-text">{{ product.description }}</p>
                </template>
                <template v-slot:footer>
                    <h2>Price: {{ product.price }}$</h2>
                </template>
      </CustomCard>
      </div>
          <div v-else>Cargando...</div>
      </div>
  </template>

  
<script lang="ts">
import useProducts from "../composables/useProducts";
import CustomCard from "@/components/CustomCard.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'DetailView',
    components: {
        CustomCard,
    },
    props: {
        id: {
            type: Number,
            required: true
        }},
    setup(props) {
        const {product, fetchProductById, isLoading} = useProducts();
        fetchProductById(props.id);
     
        let activePic = ref();   
        const changeActivePic = (index: number) => {
            activePic.value = product.value.images[index];
        }
        return {
            product,
            isLoading,
            activePic,
            changeActivePic
        }
    }
})
</script>

