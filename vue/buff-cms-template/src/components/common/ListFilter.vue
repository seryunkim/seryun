<template>
  <!--목록필터-->
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <!--title-->
        <!--<div class="box-header">-->
          <!--<h4 class="box-title">목록필터</h4>-->
        <!--</div>-->
        <!--//title-->
        <!--contents-->
        <div class="box-body">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>등록일</th>
                <td  colspan="3">
                  <div class="col-md-6">
                    <div class="all-check">
                      <label><input type="checkbox">전체 기간</label>
                    </div>
                    <div class="period">
                      <div class="input-group date">
                        <input type="text" class="form-control datepicker">
                        <div class="input-group-addon">
                          <i class="fa fa-calendar"></i>
                        </div>
                      </div>
                      <div class="input-group date">
                        <input type="text" class="form-control datepicker">
                        <div class="input-group-addon">
                          <i class="fa fa-calendar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn-wrap col-md-6">
                    <button type="button" class="btn btn-info btn-sm col-md-2">오늘</button>
                    <button type="button" class="btn btn-default btn-sm col-md-2">어제</button>
                    <button type="button" class="btn btn-default btn-sm col-md-2">지난주</button>
                    <button type="button" class="btn btn-default btn-sm col-md-2">지난달</button>
                    <button type="button" class="btn btn-default btn-sm col-md-2">1주일</button>
                    <button type="button" class="btn btn-default btn-sm col-md-2">1개월</button>
                    <button type="button" class="btn btn-default btn-sm col-md-2">3개월</button>
                  </div>

                  <!--<ul>-->
                    <!--<li><button type="button" class="btn btn-info col-md-1">오늘</button></li>-->
                    <!--<li><button type="button" class="btn btn-info">어제</button></li>-->
                    <!--<li><button type="button" class="btn btn-info">지난주</button></li>-->
                    <!--<li><button type="button" class="btn btn-info">1주일</button></li>-->
                    <!--<li><button type="button" class="btn btn-info">1개월</button></li>-->
                    <!--<li><button type="button" class="btn btn-info">3개월</button></li>-->
                  <!--</ul>-->
                </td>
              </tr>

              <tr>
                <th>장르</th>
                <td>123</td>
                <th>판매 상태</th>
                <td>셀렉트</td>
              </tr>
              <tr>
                <th>검색어 입력</th>
                <td colspan="3">123</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//contents-->
      </div>
    </div>
  </div>
  <!--//목록필터-->
</template>

<script>
    export default {
        name: "list-filter",
        mounted:function(){
          $(this.$el).find('.datepicker').datepicker({
            format: "yyyy-mm-dd",
            autoclose: true
          });
        }
    }
</script>

<style scoped>
   table th{
     width:150px;
     vertical-align:middle;
   }
   table td{
     vertical-align:top;
   }
   .all-check{
     display:inline-block;
     float:left;
     margin-right:5px;
     line-height:37px;
   }
   .all-check label{margin-bottom:0;}
  .period{
    display:inline-block;
  }
   .input-group{
     float:left;
     width:140px;
   }
   .input-group ~ .input-group{
     position:relative;
     margin-left:47px;
   }
   .input-group ~ .input-group:before{
     content:'~';
     position:absolute;
     left:-27px;
     top:0;
     line-height:34px;
   }
  .btn-wrap .btn{
    padding-left:0;
    padding-right:0;
    width:50px;
  }
  .btn-wrap .btn ~ .btn{
   margin-left:7px;
  }
</style>
