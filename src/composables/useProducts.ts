import { computed } from "vue";
import { useStore } from "vuex";
import { Pagination } from "@/models/pagination";


const useProducts = () => {
  const store = useStore();

  return {
    // GETTERS
    products: computed(() => store.getters["products/getProducts"]),
    productsFiltered: computed(() => store.getters["products/getProductsPagination"]),
    isLoading: computed(() => store.getters["products/getIsLoading"]),
    product: computed(() => store.getters["products/getProduct"]),
    productsLength: computed(() => store.getters["products/getProductLenght"]),

    // ACTIONS
    fetchProducts: () => store.dispatch("users/fetchUsers"),
    fetchProductById: ( productId: number) => store.dispatch("products/fetchProductById", productId),
    fetchProductByTitle: ( productTitle: string) => store.dispatch("products/fetchProductByTitle", productTitle),
    fetchProductByPagination: ( pagination: Pagination) => store.dispatch("products/fetchProductByPagination", pagination)
  };
};

export default useProducts;
