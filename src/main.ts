import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { appAxios } from './utils/axios'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ApiService from '@/core/services/apiServices';
import SweetAlert2 from '@/core/plugins/sweetAlert';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
ApiService.init();
app.use(createPinia())
app.provide("Swal",SweetAlert2)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
