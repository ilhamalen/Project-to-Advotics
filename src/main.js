import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
// import VuetifyDaterangePicker from 'vuetify-daterange-picker'
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css'
import VDateRange from 'vuetify-daterange-picker'

Vue.use(VDateRange)
// Vue.use(VuetifyDaterangePicker)
Vue.config.productionTip = false
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
