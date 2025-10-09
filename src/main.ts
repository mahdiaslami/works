import "@/assets/index.css"

import '@/app/support/factories'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { seed } from "./app/support/helper"

(<any>window).app = {
  seed
}

const app = createApp(App)
app.use(router)
app.mount('#app')
