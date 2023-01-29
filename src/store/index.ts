import { createStore } from 'vuex'; 
import usersModule from "./users";
import productsModule from "./products"


export interface IState {
  greeting: string;
}

export default createStore<IState>({
  state: {
    greeting: "WELCOME!!",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // cart: cartModule,
    product : productsModule,
    users: usersModule
  },
  
})

