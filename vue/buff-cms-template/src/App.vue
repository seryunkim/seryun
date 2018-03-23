<template>
  <div id='app' class="admin">
  <!--<div id='app' :class="isAdmin ? 'admin' : ''"> -->
    <!-- 관리자 모드일 경우 클래스 추가 필요 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background:#f6f6f6;
  }
  /*table th{*/
    /*background:#f6f6f6;*/
  /*}*/
  /*table{*/
    /*border-bottom:1px solid #d1d1d1;*/
  /*}*/
  /*#app table tr:first-child th,#app table tr:first-child td{*/
    /*border-top:1px solid #333;*/
  /*}*/
  /*table th{*/
    /*background:#f6f6f6;*/
  /*}*/
  /*#app th,#app td{*/
    /*border-color:#d1d1d1;*/
  /*}*/

</style>
