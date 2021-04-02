import Vue from 'vue'
import App from './App.vue'
import axiosHttp from "@/api";
import ElementUI from "element-ui";



Vue.config.productionTip = false

Vue.prototype.$axiosHttp = axiosHttp;

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
