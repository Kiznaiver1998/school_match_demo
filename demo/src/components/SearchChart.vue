<template>
  <div>
    <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="box-title">图表查询</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>关键词</label>
                <input class="form-control" type="text" placeholder="请输入关键词" v-model="tempwords" @keydown.enter="jump">
              </div>
              <!-- /.form-group -->
            </div>
            <!-- /.col -->
            <div class="col-md-2">
              <div class="form-group">
                <label>分类</label>
                <select class="form-control select2" style="width: 100%;" v-model="choose">
                  <option selected="selected">课程</option>
                  <option>专业</option>
                </select>
              </div>
              <!-- /.form-group -->
            </div>
            <!-- /.col -->
            <div class="col-md-2 move">
                <button class="btn btn-primary" @click="jump"><i class="fa fa-search"></i></button>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
      </div>
      <keep-alive>
         <result :keywords="keywords" :choose="choose" :courseList="courseList" ></result>
      </keep-alive>
  </div>
</template>

<script>
import Result from './Result.vue'
import axios from 'axios'
export default {
  components:{
      Result
  },
  data () {
    return {
      tempwords:'',
      keywords:'',
      choose:'课程',
      courseList : [],
      page:1
    }
  },
  methods:{
    jump(){
      this.keywords = this.tempwords
      this.query()
      this.tempwords = ""
    },
    query(){
        axios.get('/courses',{
        params:{
          keywords:this.keywords,
          page:1,
          pageSize:10
        }
      }).then((response)=>{
        let res =response.data;
        if(res.status == '0'){
            this.courseList = res.result.list;
        }else{
          this.courseList = [];
        }
      })
    }
  },
  mounted(){
    this.query()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.move{
  margin-top: 25px;
}
</style>
