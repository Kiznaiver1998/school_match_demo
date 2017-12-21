<template>
	<div>
	<section class="content-header">
      <h1>
        课程对比分析
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
              <h3 class="box-title">分数情况对比分析</h3>

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
              <h3 class="box-title">雷达图分析</h3>

            </div>
            <div class="box-body">
              <div class="chart">
                <div id="radarChart" style="width: 600px;height:400px;margin:0 auto"></div>
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
	<button class="btn btn-danger col-md-offset-11">导出为pdf</button>
	</div>
</template>

<script>
import echarts from 'echarts'
import ecStat from 'echarts-stat'
import axios from 'axios'
export default{
	data(){
		return {
			courseList:[
        {

        }
      ]
		}
	},
	methods:{

	},
	mounted(){
		(function () {
        var myChart = echarts.init(document.getElementById('barChart'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['最高分', '平均分','最低分']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['课程A','课程B','课程C']
            },
            series: [
                {
                    name: '最高分',
                    type: 'bar',
                    data: [18, 23, 29]
                },
                {
                    name: '平均分',
                    type: 'bar',
                    data: [18, 23, 29]
                },
                {
                    name: '最低分',
                    type: 'bar',
                    data: [19, 23, 31]
                }
            ]
        };
        myChart.setOption(option);
    })();
    (function () {
        var myChart = echarts.init(document.getElementById('radarChart'));
        var option = {
            tooltip: {},
            legend: {
                data: ['课程A', '课程B','课程C']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: '平均分', max: 100},
                   { name: '选课人数', max: 1000},
                   { name: '最高分', max: 100},
                   { name: '最低分', max: 100},
                   { name: '挂科率', max: 1.0},
                   { name: '难度系数', max: 1.0}
                ]
            },
            series: [{
                name: '各课程直接的比较分析',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [80, 200, 90, 20, 0.19, 0.2],
                        name : '课程A'
                    },
                     {
                        value : [60, 400, 96, 10, 0.20, 0.3],
                        name : '课程B'
                    },
                    {
                        value : [50, 300, 100, 60, 0, 1.0],
                        name : '课程C'
                    }
                ]
            }]
        };
        myChart.setOption(option);
    })();
    (function () {
      var x1 = [];
      var x2 = [];
      for (var i = 0; i < 500; i ++) {
        x1[i] = Math.random();
        x2[i] = Math.random();
      }

      var trace1 = {
       x: x1,
       type: "histogram",
      };
      var trace2 = {
        x: x2,
        type: "histogram",
      };
      var data = [trace1, trace2];
      var layout = {barmode: "stack"};
      Plotly.newPlot("histogram", data, layout);
      })()
    }
}
</script>

<style scoped>
</style>