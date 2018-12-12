import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Dashboard from '@/components/Dashboard'
import Dopunska from '@/components/Dopunska'
import DataTable from '@/components/DataTable'
import LivePreview from '@/components/LivePreview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LivePreview',
      component: LivePreview
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dopunska',
      name: 'Dopunska',
      component: Dopunska
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component: DataTable
    },
    /* {
      path: '/livepreview',
      name: 'LivePreview',
      component: LivePreview
    } */
  ],
  mode: 'history'
})
