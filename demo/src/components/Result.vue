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
                  <th v-if="choose === '课程'">选择</th>
                  <th v-if="choose === '专业'">Reason</th>
                  <th v-if="choose === '专业'">Reason</th>
                  <th v-if="choose === '专业'">Reason</th>
                </tr>
              	</thead>
              	<tbody>
                  <tr v-for="item in courseList" v-if="choose === '课程'">
                    <td>{{item.course_id}}</td>
                    <router-link :to="{path:'scores/charts',query:{'courseName': item.course_name}}" tag="td">
                      <td>{{item.course_name}}</td>
                    </router-link>
                    <td>{{item.term_name}}</td>
                    <td>{{item.credit}}</td>
                    <td>{{item.noc}}</td>
                    <td class="form-group">
                      <label>
                        <input type="checkbox" class="minimal kuang" style="" @click="kOutput">
                      </label>
                    </td>
                    
                  </tr>
              	</tbody>
              </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li ><a @click="sendp" v-if="page!==1" class="k-pointer">上一页</a></li>
                <li><a @click="sendn" v-if="isLast===false" class="k-pointer">下一页</a></li>
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
        isOn:0
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
      },
      isLast:{
        type:Boolean,
        default:false
      },
      page:{
        type:Number,
        default:1
      }
		},
    methods:{
      sendn(){
        this.$emit('nPage');
      },
      sendp(){
        this.$emit('pPage')
      },
      underLine(){
        this.isOn = 1
        console.log(this.isOn)
      },
      kOutput(){
        console.log('item')
      }
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
.k-pointer{
  cursor: pointer;
}
.k-default{
  cursor: not-allowed;
}
.k-on{
  text-decoration: underline;
}
.kuang{
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 5px;
}
</style>