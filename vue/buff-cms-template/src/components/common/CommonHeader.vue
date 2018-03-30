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
              <router-link to="/login">로그아웃</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
      name: "common-header"
    }
</script>

<style scoped>
  .main-header{
    background:#fff;
    border-bottom:1px solid #aaa;
    box-sizing:border-box;
  }
  #app .logo{
    height:80px;
    line-height:80px;
    background:#fff;
    border-right:0;
  }
  .navbar .inner{
    margin-top:32px;
  }
  #app .nav{
    margin-top:5px;
    padding:0;
  }
  #app .nav li:first-child a{
    border-left:0;
  }
  .main-header .nav a{
    padding:0 7px;
    font-size:12px;
    line-height:1.1;
  }
  .txt_admin{
    display:inline-block;
    padding-left:23px;
    border-left:1px solid #d1d1d1;
    vertical-align:middle;
  }
  /*#app a {*/
    /*color: #333*/
  /*}*/
  @media (max-width: 767px){
      .navbar{display:none;}
  }
</style>
