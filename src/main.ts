import './assets/main.css'
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Primevue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core CSS
import 'primeicons/primeicons.css' //icons

import App from './App.vue'
import router from './router'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Create new vue app
createApp(App)
    .use(createPinia())
    .use(router)
    .use(Primevue)
    .component('InputText', InputText)
    .component('InputNumber', InputNumber)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .mount('#app')
