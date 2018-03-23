<template>
  <header class="main-header">
      <!--logo-->
      <a href="#" class="logo"><img src="@/assets/logo.png"></a>
      <nav class="navbar navbar-static-top">
          <div class="inner">
              <!--관리자모드-->
              <span class="txt_admin"><img src="@/assets/txt_admin.png"></span>
              <!--login 완료-->
              <div class="navbar-custom-menu">
                  <ul class="nav navbar-nav">
                      <li>
                        <a href="#"><span>홍길동</span>님</a>
                      </li>
                      <li>
                        <a href="#">로그아웃</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
</template>

<script>
    export default {
      name: "layout-header"
    }
</script>

<style scoped>
  .main-header{
    background:#fff;
    border-bottom:1px solid #aaa;
    box-sizing:border-box;
  }
  .logo{
    height:100px;
    line-height:100px;
  }
  #app .nav{
    padding:0;
  }
  #app .nav li:first-child a{
    border-left:0;
  }
  .main-header .navbar{
    min-height:100px;
  }
  .navbar .inner{
    margin-top:42px;
  }
  .main-header .nav a{
    padding:5px;
  }
  .txt_admin{
    display:inline-block;
    padding-left:23px;
    border-left:1px solid #d1d1d1;
    vertical-align:middle;
  }
  #app a {
    color: #333
  }
  #app a:hover,a:active,a:focus {
    background:none;
    color: #333;
    text-decoration:underline;
  }
  @media (max-width: 767px){
      .navbar{display:none;}
      /*.main-header{background:#fff;}*/
      /*.logo{width:40%;float:left;}*/
      /*.navbar{width:60%;float:left;}*/
  }
  .login .navbar-custom-menu{display:none;} /*삭제예정*/
</style>
