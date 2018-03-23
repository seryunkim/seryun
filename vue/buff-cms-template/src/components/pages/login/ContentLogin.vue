<template>
  <div class="login-wrap">
      <!-- form start -->
      <form class="form-horizontal">
          <div class="form-group">
              <label for="inputID" class="col-sm-2 control-label">아이디</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputID" placeholder="bufftoon@bufftoon.com">
              </div>
          </div>
          <div class="form-group">
              <label for="inputPW" class="col-sm-2 control-label">비밀번호</label>
              <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPW" placeholder="">
              </div>
          </div>
          <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                  <!--관리자 모드일 경우-->
                  <div class="checkbox">
                      <label><input type="checkbox">계정 저장하기</label>
                  </div>
                  <!--cp/작가 모드일 경우-->
                  <div class="checkbox">
                      <label><input type="checkbox">아이디 저장하기</label>
                      <a href="#none" class="btn-login">회원가입</a>
                  </div>
              </div>
          </div>
          <!-- login button -->
          <router-link class="btn btn-info btn-block btn-login" to='/'>로그인</router-link>
      </form>
      <!-- //form start -->
  </div>
  <!-- /.box -->
  </div>
</template>

<script>
    export default {
        name: "content-login"
    }
</script>

<style scoped>
  .login-wrap{
    margin:120px auto 80px;
    padding:15px;
    max-width:500px;
  }
  .control-label{
    padding-left:0;
    padding-right:0px;
    text-align:left;
  }
  .form-horizontal .form-group{
    margin-left:0;
    margin-right:0;
  }
  .form-group a:hover{
    /*color:#00c0d1;*/
    text-decoration:underline;
  }
  .checkbox label ~ a{
    margin-left:10px;
  }
  /*.btn-login{*/
    /*width:100%;*/
  /*}*/
</style>
