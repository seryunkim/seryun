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
          <div>
            <label class="checkbox-inline">
              <input type="checkbox" />
              <i class="fa fa-fw"></i>
              <strong>계정 저장하기</strong>
            </label>
          </div>
          <!--cp/작가 모드일 경우-->
          <div>
            <label class="checkbox-inline">
              <input type="checkbox" />
              <i class="fa fa-fw"></i>
              <strong>아이디 저장하기</strong>
            </label>
            <router-link class="btn-link btn-join" to='/'>회원가입</router-link>
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
    name: "login"
  }
</script>

<style scoped>
  .login-wrap{
    margin:240px auto 120px;
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
    text-decoration:underline;
  }
  .checkbox-inline{
    padding-top:0;
  }
  .btn-join{
    margin-left:10px;
  }
</style>
