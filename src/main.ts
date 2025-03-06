import './style.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router.js'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, {
    theme: {
        preset: Material,
        options: {
            toolbar: {
              background: '#e74c3c' // Example color
            }
          }
    }
})

app.use(pinia)

app.use(router)

app.mount('body')
