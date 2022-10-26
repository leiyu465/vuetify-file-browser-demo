import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'
import { loadFonts } from './plugins/webfontloader'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')


