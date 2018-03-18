<template>
  <header class="header">
      <div class="header_top">
          <h1 class="h_left"><router-link class="logo" to="/">bufftoon</router-link></h1>
          <div class="h_right">
              <a class="btn_login" href="javascript:void(0);">로그인</a>
              <a class="btn_search" href="javascript:void(0);">검색</a>
          </div>
      </div>
      <header-nav />
  </header>
</template>

<script>
import HeaderNav from '@/components/common/HeaderNav'

export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  components: {
    HeaderNav
  }
}
</script>

<style scoped>
.header{
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    border-bottom:1px solid #bfbfbf;
    background-color:#fff;
    z-index:100;
}
.header .header_top{
    padding:16px 15px;
}
.header_top:after{
    clear:both;
    display:table;
    content:'';
}
.header_top .h_left{
    float:left;
}
.header_top .h_right{
    float:right;
}
.header_top a{
    display:inline-block;
    font-size:1px;
    line-height:0;
    color:transparent;
}
.header .h_right a{float:left;}
.header .logo{
    width:132px;
    height:25px;
    background:url(https://bufftoon.plaync.com/buffweb/m/images/common/logo_bufftoon.png) no-repeat 0 0;
    background-size: 132px 25px;
    vertical-align:top;
}
.header .btn_login{
    padding:5px 15px 5px 0;
    color:#858585;
    font-size:11px;
    line-height:18px;
}
.header .btn_search{
    width:28px;
    height:28px;
    background:url(https://bufftoon.plaync.com/buffweb/m/images/common/ico_search.png) no-repeat 5px 5px;
    background-size:18px;
}
</style>
