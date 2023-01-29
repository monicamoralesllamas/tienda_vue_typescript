import { GetterTree } from "vuex";
import { IState } from "../index";
import { ProductStateInterface } from "./state";

const getters: GetterTree< ProductStateInterface, IState> = {
  getProducts(state) {
    return state.products;
  },
  getProductsPagination(state) {
    return state.productsFiltered;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getProduct(state) {
    return state.selectedProduct;
  },
  getProductLenght(state) {
    return state.products.length;
  },
};
export default getters;
