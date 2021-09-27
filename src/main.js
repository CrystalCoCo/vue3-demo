import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'

import { Button, Form, Input, Select, DatePicker, Switch, Checkbox, Radio } from 'ant-design-vue'

const app = createApp(App)
app.use(Button)
app.use(Form)
app.use(Input)
app.use(Select)
app.use(DatePicker)
app.use(Switch)
app.use(Checkbox)
app.use(Radio)

app.use(store).use(router).mount('#app')
