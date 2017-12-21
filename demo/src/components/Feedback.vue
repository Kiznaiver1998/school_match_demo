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
            	<button class="btn btn-primary col-md-offset-11" style="font-size:18px" data-toggle="modal" data-target="#dModal">发送</button>
            </div>
    </div>

    <div class="example-modal" >
        <div class="modal" id="dModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">反馈发送成功</h4>
              </div>
              <div class="modal-body">
                <p>感谢您的反馈，我们一定会更加努力&hellip;</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
      </div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style scoped>

    .example-modal .modal {
      background: transparent !important;
    }
</style>
