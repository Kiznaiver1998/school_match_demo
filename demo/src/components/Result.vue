<template>
	<div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">结果显示</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
              	<thead>
              	<tr>
                  <th v-if="choose === '课程'">课程代码</th>
                  <th>{{choose}}名称</th>
                  <th v-if="choose === '课程'">学期名称</th>
                  <th v-if="choose === '课程'">学分</th>
                  <th v-if="choose === '课程'">课程性质</th>
                  <th v-if="choose === '专业'">Reason</th>
                  <th v-if="choose === '专业'">Reason</th>
                  <th v-if="choose === '专业'">Reason</th>
                </tr>
              	</thead>
              	<tbody>
              	<router-link :to="{path:'scores/charts',query:{'courseName': item.course_name}}" tag="tr" v-for="item in courseList" v-if="choose === '课程'">
                  <td>{{item.course_id}}</td>
                  <td>{{item.course_name}}</td>
                  <td>{{item.term_name}}</td>
                  <td>{{item.credit}}</td>
                  <td>{{item.noc}}</td>
              </router-link>
              	</tbody>
              </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li><a>下一页</a></li>
              </ul>
            </div>
          </div>
          <!-- /.box -->
        </div>
      </div>
</template>

<script>
	export default{
		data(){
			return{
        clength: this.courseList.length/10
			}
		},
		props:{
			keywords:{
				type:String,
				default:''
			},
			choose:{
				type:String,
				default:''
			},
      courseList:{
        type:Array,
        default:[]
      }
		},
    methods:{
      // send(){
      //   this.$emit('cPage');
      // }
    }
	}
</script>

<style scoped>
tbody tr{
	cursor: pointer;
}
tfoot{
    float: right;
}
</style>