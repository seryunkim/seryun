<template>
  <div id='app' class="wrapper">
    <!--hedeaer-->
    <common-header />

    <!--aside-->
    <common-sidebar />

    <!--router-->
    <router-view/>

    <!--footer-->
    <common-footer />
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonFooter from '@/components/common/CommonFooter'
  import CommonSidebar from '@/components/common/CommonSidebar'

  export default {
    name: 'App',
    components: {
      CommonHeader,
      CommonFooter,
      CommonSidebar
    }
  }
</script>

<style>
  body{
    background:#ecf0f5;
    color:#666;
  }
  #app{
    background:#ecf0f5;
  }
  p{margin-bottom:0;}
  /*button*/
  .btn:focus,.btn:active{
    box-shadow:none !important;
    /*border:none !important;*/
  }
  /*form*/
  label[class^=check]{
    position:relative;
    padding-left:0;
  }
  input[type='checkbox']{
    position:absolute;
    width:1px;
    height:1px;
    top:0;
    left:0;
    opacity:0;
  }
  input[type='checkbox'] ~ i{
    float:left;
    margin:0.15em 0.15em 0;
  }
  input[type='checkbox'] ~ i:before{
    content:"\f096";
    float:left;
    font-size:1.2em;
  }
  input[type='checkbox']:checked ~ i:before{
    content:"\f046";
  }
  label[class^=radio]{
    position:relative;
    padding-left:0;
  }
  input[type='radio']{
    position:absolute;
    width:1px;
    height:1px;
    top:0;
    left:0;
    opacity:0;
  }
  input[type='radio'] ~ i{
    float:left;
    line-height:inherit;
  }
  input[type='radio'] ~ i:before{
    content:"\f10c";
    float:left;
  }
  input[type='radio']:checked ~ i:before{
    content:"\f192";
  }
  /*table*/
  #app .table tr > th{
    width:140px;
    vertical-align:middle;
  }
  /*box*/
  .box-title i{
    margin-right:5px;
    vertical-align:top;
  }
  .inline-block{
    display:inline-block;
  }
</style>
