<template>
  <div class="content-wrapper" style="min-height:900px;">
    <!--template-->

    <!--template-->
    <section class="content-header">
      <h1>
        Title
        <small>Preview sample</small>
      </h1>
      <!--<ol class="breadcrumb">-->
        <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>-->
        <!--<li><a href="#">Charts</a></li>-->
        <!--<li class="active">ChartJS</li>-->
      <!--</ol>-->
    </section>
    <section class="content">

      <!--목록필터-->
      <list-filter />

      <div class="row">
        <!--table-->
        <div class="col-md-12">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">TABLE</h3>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool"><i class="fa fa-refresh"></i></button>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody><tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Reason</th>
                </tr>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-success">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Alexander Pierce</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-warning">Pending</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Bob Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-primary">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Mike Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-danger">Denied</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin">
                <li><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!--//table-->
      </div>
    </section>
  </div>
</template>

<script>
    import ListFilter from '@/components/common/ListFilter'
    export default {
        name: "content-home",
        components:{
          ListFilter
        }
    }
</script>

<style scoped>
</style>
