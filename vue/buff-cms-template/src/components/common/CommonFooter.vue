<template>
  <footer class="main-footer">
    Copyright © NCSOFT Corporation. All Rights Reserved.
  </footer>
</template>

<script>
    export default {
        name: "common-footer"
    }
</script>

<style>
  .main-footer{
    margin:40px 0 0 0;
    /*background:#f6f6f6;*/
    /*background:#ecf0f5;*/
    background: none;
    border-top:0;
    text-align:center;
    font-size:13px;
    color:#9f9f9f;
  }
  .main-sidebar ~ footer{
    margin-top:0;
    margin-left:230px;
    text-align:left;
    /*background:#fff;*/
  }
</style>

<style scoped>

</style>
