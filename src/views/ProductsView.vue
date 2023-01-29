<template>
    <div class="products">
      <h1>PRODUCTOS DISPONIBLES</h1>
      <SearchButton></SearchButton>
      <div v-if="isLoading">Cargando...</div>
    <div class="product-list" v-else>
      <ProductItem
        v-for="product in productsFiltered"
        :key="product.id"
        :product="product"
        @goDetail="goDetail"
      />
    </div>
    </div>
  </template>


<script lang="ts">
import { defineComponent, computed , ref , onMounted } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import SearchButton from '@/components/SearchButton.vue';
import { useRouter } from 'vue-router';
import { Product } from '../models/product';
import useProducts from '../composables/useProducts';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItem,
    SearchButton
},
setup(){
  const {products, productsFiltered, isLoading, productsLength, fetchProducts, fetchProductByTitle, fetchProductByPagination} = useProducts();
  const router = useRouter();
  fetchProducts();
  let inputFilter = ref("");

  const limitShow = 18;
  const showAllProducts = () => {
    fetchProductByPagination({offset:0 , limit : limitShow});
  }
    fetchProductByPagination({offset:0 , limit : limitShow});

    const validateInput = () => {
      const filter = inputFilter.value.toLowerCase();
      for(let i = 0; i < productsLength.value; i++){
        if (products.value[i].title.toLowerCase().includes(filter)){    
          const titleArray = products.value[i].title.split(" ");
          for(let j = 0; j < titleArray.length; j++){
            if(titleArray[j].toLowerCase().includes(filter)){
              fetchProductByTitle(titleArray[j]);
            }
          }
        }
      }
    }

    let offset = 0;
    const showPrevious = () =>{
      if (offset == 0){
        alert('There are no more products!')
      }else{
        offset = offset - 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }
  
    const showNext = () =>{
      if (offset >= productsLength.value){
        alert('There are no more products')
      }else{
        offset = offset + 18;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
  }

return{
  products,
  productsFiltered,
  isLoading,
  goDetail: (product: Product) => router.push({name: 'detail', params: {id: product.id}}),
  inputFilter,
  validateInput,
  showAllProducts,
  showPrevious,
  showNext
  }
  }
});
</script>
  