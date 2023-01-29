import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import  {IState} from ".." ;
import { ProductStateInterface } from "./state";
import { Pagination } from "@/models/pagination"

const actions: ActionTree<ProductStateInterface , IState> = {
  //Acceder a todos los productos
  async fetchProducts({ commit }) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      '/products');
    commit("setIsLoading", false);
    commit("setProducts", data);
  },

  //Acceder a un producto por su Id
  async fetchProdutcById({ commit }, productId: number) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
      `/products/${productId}` );
    commit("setIsLoading", false);
    commit("setSelectedProduct", data);
  },

  //Acceder a un producto por su título
  async fetchProdutcByTitle({ commit }, productTitle: string) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      `/products/?title${productTitle}`);
    commit("setIsLoading", false);
    commit("setProductsFiltered", data);
  },

  //Paginación
  async fetchProductByPagination({ commit }, pagination: Pagination) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      `/products/?offset=${pagination.offset}&limit=${pagination.limit}` );
    commit("setIsLoading", false);
    commit("setProductsFiltered", data);
  },
};

export default actions;
