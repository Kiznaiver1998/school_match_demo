<template>
	<div>
		<div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">意见反馈表</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <form role="form">
                <!-- text input -->
                <div class="form-group">
                  <label>反馈标题</label>
                  <input type="text" class="form-control" placeholder="Enter ...">
                </div>

                <!-- textarea -->
                <div class="form-group">
                  <label>反馈内容</label>
                  <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
                </div>


              </form>

            </div>
            <div class="box-footer">
            	<button class="btn btn-primary col-md-offset-11" style="font-size:18px">发送</button>
            </div>
           </div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style></style>
