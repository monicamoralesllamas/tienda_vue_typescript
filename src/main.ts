import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import headerVue from './components/header.vue
Vue.component('app-header', Header)

createApp(App).use(store).use(router).mount('#app')
