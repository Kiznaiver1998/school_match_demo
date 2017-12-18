import Vue from 'vue'
import Router from 'vue-router'
import SearchChart from '@/components/SearchChart'

Vue.use(Router)
	var Login={
			template:'<h4>。获取参数：{{$route.query.name}},{{$route.query.choose}}</h4>'
	}
export default new Router({
  routes: [
    {
      path: '/scores',
      component: SearchChart,
      children:[
        {
          path: 's',
          component:Login
        }
      ]
  	},
  ]
})
