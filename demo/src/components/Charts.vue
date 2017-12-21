<template>
	<div id="mainCharts" >
	<section class="content-header">
      <h1>
        <b>{{$route.query.courseName}}</b>成绩分析
        <small>挂科率：{{toDecimal2(course['0-59']*100/(this.course["0-59"] + this.course["60-75"] + this.course["76-89"] + this.course["90-100"]))}}%</small>
        <small>考试人数：{{this.course["0-59"] + this.course["60-75"] + this.course["76-89"] + this.course["90-100"]}}/总人数：{{this.course["0-59"] + this.course["60-75"] + this.course["76-89"] + this.course["90-100"]}}</small>
      </h1>
      <ol class="breadcrumb">
        <button class="btn btn-primary" @click="getBack">返回</button>
      </ol>
    </section>
	<section class="content">
      <div class="row">
        <div class="col-md-6">
          <!-- AREA CHART -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">分数情况</h3>

            </div>
            <div class="box-body">
              <div class="chart">
                <div id="barChart" style="width: 600px;height:400px;"></div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <!-- DONUT CHART -->
          <div class="box box-danger" style="width:1400px;height:600px">
            <div class="box-header with-border">
              <h3 class="box-title">成绩分布</h3>
            </div>
            <div class="box-body">
              <div id="histogram" style="width: 1400px;height:500px;"></div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

        </div>
        <!-- /.col (LEFT) -->
        <div class="col-md-6">
          <!-- LINE CHART -->
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">成绩占比</h3>

            </div>
            <div class="box-body">
              <div class="chart">
                <div id="roundChart" style="width: 600px;height:400px;margin:0 auto"></div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
        <!-- /.col (RIGHT) -->
      </div>
      <!-- /.row -->

    </section>
	<hr>
	<div>
		
	</div>
	<button class="btn btn-danger col-md-offset-11">导出为pdf</button>
	</div>
</template>

<script>

import echarts from 'echarts'
import ecStat from 'echarts-stat'
import axios from 'axios'
import jsPDF from '../../dist/js/jsPDF.debug.js'
import html2canvas from '../../dist/js/html2canvas.js'
	export default{
		data(){
			return{
				course:{}
			}
		},
		methods:{
		    getBack(){
		    	this.$router.go(-1)
		    },
		    toDecimal2(x) { 
			      var f = parseFloat(x); 
			      if (isNaN(f)) { 
			        return false; 
			      } 
			      var f = Math.round(x*100)/100; 
			      var s = f.toString(); 
			      var rs = s.indexOf('.'); 
			      if (rs < 0) { 
			        rs = s.length; 
			        s += '.'; 
			      } 
			      while (s.length <= rs + 2) { 
			        s += '0'; 
			      } 
			      return s; 
			 },
			 changePDF(){
         		html2canvas(document.getElementById('mainCharts'), {
				  onrendered:function(canvas) {

				      var contentWidth = canvas.width;
				      var contentHeight = canvas.height;

				      //一页pdf显示html页面生成的canvas高度;
				      var pageHeight = contentWidth / 592.28 * 841.89;
				      //未生成pdf的html页面高度
				      var leftHeight = contentHeight;
				      //页面偏移
				      var position = 0;
				      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
				      var imgWidth = 595.28;
				      var imgHeight = 592.28/contentWidth * contentHeight;


				      var pdf = new jsPDF('', 'pt', 'a4');

				      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
				      //当内容未超过pdf一页显示的范围，无需分页
				      if (leftHeight < pageHeight) {
					  pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
				      } else {
					      while(leftHeight > 0) {
					          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
					          leftHeight -= pageHeight;
					          position -= 841.89;
					          //避免添加空白页
					          if(leftHeight > 0) {
						        pdf.addPage();
					          }
					      }
				      }

      pdf.save('content.pdf');
  }
})
         	}
		},
		mounted(){
		axios.get('/courses',{ params:{
			courseName:this.$route.query.courseName
		}
		}).then((response)=>{
		 let res =response.data;
		 if(res.status == '0'){
		         this.course = res.result.list[0];
		         console.log(this.course);
		    (function (max,min,avg) {
			var myChart = echarts.init(document.getElementById('barChart'));

        // 指定图表的配置项和数据
	        var option = {
			    color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['最低分', '平均分', '最高分'],
			            axisTick: {
			                alignWithLabel: true
			            }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'成绩',
			            type:'bar',
			            barWidth: '60%',
			            data:[min,avg,max]
			        }
			    ]
			};

	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
		})(this.course.max,this.course.min,this.course.mean);
		//渲染环形图
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
			            name:'成绩分布',
			            type:'pie',
			            selectedMode: 'single',
			            radius: [0, '30%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    position: 'inner'
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[

			                {value:dx, name:'优秀率'},
			                {value:cx+bx, name:'良好率'}
			            ]
			        },
			        {
			            name:'成绩分布',
			            type:'pie',
			            radius: ['40%', '55%'],
			            label: {
			                normal: {
			                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
			                    backgroundColor: '#eee',
			                    borderColor: '#aaa',
			                    borderWidth: 1,
			                    borderRadius: 4,
			                    // shadowBlur:3,
			                    // shadowOffsetX: 2,
			                    // shadowOffsetY: 2,
			                    // shadowColor: '#999',
			                    // padding: [0, 7],
			                    rich: {
			                        a: {
			                            color: '#999',
			                            lineHeight: 22,
			                            align: 'center'
			                        },
			                        // abg: {
			                        //     backgroundColor: '#333',
			                        //     width: '100%',
			                        //     align: 'right',
			                        //     height: 22,
			                        //     borderRadius: [4, 4, 0, 0]
			                        // },
			                        hr: {
			                            borderColor: '#aaa',
			                            width: '100%',
			                            borderWidth: 0.5,
			                            height: 0
			                        },
			                        b: {
			                            fontSize: 16,
			                            lineHeight: 33
			                        },
			                        per: {
			                            color: '#eee',
			                            backgroundColor: '#334455',
			                            padding: [2, 4],
			                            borderRadius: 2
			                        }
			                    }
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

		(function (grade) {
			var myChart = echarts.init(document.getElementById('histogram'));
			if(grade.length<=1)
			{
				myChart.innerHTML="只有一个学生，无法分析"
				return
			}
			var girth = grade;

			// See https://github.com/ecomfe/echarts-stat
			var bins = ecStat.histogram(girth);

			var interval;
			var min = Infinity;
			var max = -Infinity;

			var data = echarts.util.map(bins.data, function (item, index) {
			    var x0 = bins.bins[index].x0;
			    var x1 = bins.bins[index].x1;
			    interval = x1 - x0;
			    min = Math.min(min, x0);
			    max = Math.max(max, x1);
			    return [x0, x1, item[1]];
			});

			function renderItem(params, api) {
			    var yValue = api.value(2);
			    var start = api.coord([api.value(0), yValue]);
			    var size = api.size([api.value(1) - api.value(0), yValue]);
			    var style = api.style();

			    return {
			        type: 'rect',
			        shape: {
			            x: start[0] + 1,
			            y: start[1],
			            width: size[0] - 2,
			            height: size[1]
			        },
			        style: style
			    };
			}

			var option = {
			    title: {
			        text: '各分数段的人数',
			        left: 'center',
			        top: 10
			    },
			    color: ['rgb(25, 183, 207)'],
			    grid: {
			        top: 80,
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'value',
			        min: min,
			        max: max,
			        interval: interval
			    }],
			    yAxis: [{
			        type: 'value',
			    }],
			    series: [{
			        name: 'height',
			        type: 'custom',
			        renderItem: renderItem,
			        label: {
			            normal: {
			                show: true,
			                position: 'insideTop'
			            }
			        },
			        encode: {
			            x: [0, 1],
			            y: 2,
			            tooltip: 2,
			            label: 2
			        },
			        data: data
			    }]
			};
			myChart.setOption(option);

		})(this.course['grade']);
		console.log(this.course.grade)
		}else{
		          this.course = {};
		        }
		      });
		//渲染bar图
		
	}
}
</script>

<style scoped>
</style>
