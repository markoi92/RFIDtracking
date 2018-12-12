// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'
import VueGoogleCharts from 'vue-google-charts'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'ws://localhost:2004/ws', { format: 'json' })


/* import colors from 'vuetify/es5/util/colors'
 */
Vue.use(Vuetify, {
  theme: {
    primary: '#757575',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',

  }
})


Vue.use(VueChartkick, { adapter: Chart })

Vue.use(VueGoogleCharts)
Vue.use(VueResource);
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
