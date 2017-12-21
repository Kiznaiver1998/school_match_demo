# demo

> xuanti2

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



```
(function (ax,bx,cx,dx) {
			var myChart = echarts.init(document.getElementById('roundChart'));
			var option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['90-100','76-89','60-75','0-59']
			    },
			    series: [
			        {
			            name:'学生人数',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:dx, name:'90-100'},
			                {value:cx, name:'76-89'},
			                {value:bx, name:'60-75'},
			                {value:ax, name:'0-59'}
			            ]
			        }
			    ]
			};
			myChart.setOption(option);
		})(this.course["0-59"],this.course["60-75"],this.course["76-89"],this.course["90-100"]);
```

