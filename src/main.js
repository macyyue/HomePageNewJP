import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BackToTop from '@/views/BackToTop/BackToTop.vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'viewerjs/dist/viewer.css'
const app = createApp(App)
const pinia = createPinia();

app.component('BackToTop', BackToTop);
app.use(router)
app.mount('#app')
app.use(pinia)
app.use(ElementPlus); // 使用 Element Plus 插件

