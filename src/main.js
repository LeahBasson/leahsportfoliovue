import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import 'aos/dist/aos.css'
import './registerServiceWorker'

createApp(App).use(store).use(router).mount('#app')
