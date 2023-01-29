import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ProductStateInterface } from "./state";

const mutations: MutationTree<ProductStateInterface> = {
  setProducts(state: ProductStateInterface, products: Product[]) {
    state.products = products;
  },
  setProductsFiltered(state:ProductStateInterface, productsFiltered: Product[]){
  state.productsFiltered = productsFiltered;
 },
  setIsLoading(state: ProductStateInterface, value: boolean) {
    state.isLoading = value;
  },
  setSelectedProduct(state, user: Product) {
    state.selectedProduct = user;
  }
};

export default mutations;
