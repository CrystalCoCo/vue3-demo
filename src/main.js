import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';
const app = createApp(App)
app.use(Button)
app.use(store).use(router).mount('#app')
