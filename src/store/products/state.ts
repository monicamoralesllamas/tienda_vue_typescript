import { Product } from "@/models/product";

export interface ProductStateInterface {
  products: Product[];
  productsFiltered : Product[],
  isLoading: boolean;
  selectedProduct: Product | null;
}

function state(): ProductStateInterface {
  return {
    products: [],
    productsFiltered:[],
    isLoading: false,
    selectedProduct: null,
  };
}
export default state;
