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
                <input class="form-control" type="text" placeholder="请输入关键词" v-model="keywords">
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
      <charts :keywords="keywords" :choose="choose"></charts>
  </div>
</template>

<script>
import Charts from './Charts.vue'
export default {
  components:{
      Charts
  },
  data () {
    return {
      keywords:'',
      choose:'课程'
    }
  },
  methods:{
    jump(){
      this.$router.push({path:'s',query:{name:this.keywords , choose: this.choose}})
    }
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
