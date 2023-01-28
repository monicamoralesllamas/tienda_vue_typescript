import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import'@/assets/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')
