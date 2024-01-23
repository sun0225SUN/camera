import '@/assets/css/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'

import VueLazyload from 'vue-lazyload'
import App from '@/App.vue'

import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(VueLazyload, {
  preLoad: 1,
  loading: 'images/loading.gif',
  attempt: 1,
})
app.mount('#app')
