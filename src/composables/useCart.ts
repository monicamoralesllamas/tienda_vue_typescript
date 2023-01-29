import { Product } from "@/models/product";
import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
  const store = useStore();

  return {
    // getters
    cartItems: computed(() => store.getters["cart/getCartElements"]),
    isCartOpen: computed(() => store.getters["cart/getIsOpen"]),

    // mutations
    addElementToCart: (user: Product) => store.commit("cart/addElement", ),
    removeElementFromCart: (user: Product) =>
      store.commit("cart/removeElement", user),
    toggleCart: () => store.commit("cart/toggleCart"),
  };
};
