import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/global.css'
import './assets/css/navbar.css'
import './assets/css/home.css'
import './assets/css/about.css'
import './assets/css/skills.css'
import './assets/css/projects.css'
import './assets/css/modal.css'
import './assets/css/contact.css'

createApp(App)
  .use(router)
  .mount('#app')
