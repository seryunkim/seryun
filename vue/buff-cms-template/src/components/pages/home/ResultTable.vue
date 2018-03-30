<template>
  <div class="row">
    <!--table-->
    <div class="col-md-12">
      <div class="box no-border">
        <div class="box-header with-border">
          <h3 class="box-title">전체<small>123</small></h3>
          <div class="box-title">
            <select class="form-control input-sm" name="category">
              <option>30개씩 보기 (기본)</option>
              <option>40개씩 보기</option>
              <option>50개씩 보기</option>
              <option>100개씩 보기</option>
            </select>
          </div>
          <div class="box-tools pull-right">
            <button type="button" class="btn bg-navy btn-sm">
              <i class="fa fa-download"></i> 엑셀 다운로드
            </button>
            <button type="button" class="btn btn-default btn-sm">
              작품 등록
            </button>
          </div>
        </div>
        <div class="box-body no-padding">
          <table class="table">
            <tbody>
            <tr>
              <th>선택</th>
              <th>대표<br/>이미지</th>
              <th>작품명</th>
              <th>test</th>
              <th>test</th>
              <th>판매상태</th>
            </tr>
            <tr>
              <td>
                <div class="checkbox">
                  <label><input type="checkbox"></label></div>
              </td>
              <td>
                <div class="img-wrap">
                  <img src="https://dummyimage.com/50x50/ccc/fff"/>
                </div>
              </td>
              <td>
                <a href="#" class="btn-link">짜쳐도 꿀팁</a>
              </td>
              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              <td>
                test
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-flat btn-sm">판매전</button>
                  <button type="button" class="btn btn-default btn-flat btn-sm dropdown-toggle" data-toggle="dropdown">
                    <span class="caret"></span>
                    <span class="sr-only"></span>
                  </button>
                  <ul class="dropdown-menu dropd">
                    <li><a href="#">판매전</a></li>
                    <li><a href="#">판매중지</a></li>
                  </ul>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="box-footer clearfix text-center">
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
</template>

<script>
// import 'datatables.net/js/jquery.dataTables.min.js'
// import 'datatables.net-bs/js/dataTables.bootstrap.min.js'
    export default {
        name: "result-table"
    }
</script>

<style scoped>
.box-title ~ .box-title{
  margin-left:10px;
}
.box-tools{
  top:8px;
 }
</style>
