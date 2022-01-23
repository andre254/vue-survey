import { createApp } from 'vue'
import store from './store'
import router from './router'
// this is for tailwind styles
import './index.css'
import App from './App.vue'

createApp(App)
.use(router)
.use(store)
.mount('#app')
