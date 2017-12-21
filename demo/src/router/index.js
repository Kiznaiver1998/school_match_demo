import Vue from 'vue'
import Router from 'vue-router'
import SearchChart from '@/components/SearchChart'
import InData from '@/components/InData'
import About from '@/components/About'
import History from '@/components/History'
import FeedBack from '@/components/FeedBack'
import Charts from '@/components/Charts'
import CommonCharts from '@/components/Common-Charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/scores',
      component: SearchChart
  	},
    {
      path: '/in',
      component:InData
    },
    {
      path: '/about',
      component:About
    },
    {
      path: '/feedback',
      component:FeedBack
    },
    {
      path: '/history',
      component:History
    },
    {
      path:'/scores/charts',
      component:Charts
    },
    {
      path:'/scores/commoncharts',
      component:CommonCharts
    },
    {
      path: '*',
      redirect:'/scores'
    }
  ]
})
