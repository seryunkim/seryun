<template>
  <div class="login">
      <!--hedeaer-->
      <layout-header />

      <!--content-->
      <content-login />
      <!--footer-->
      <layout-footer />
  </div>
</template>

<script>
    import LayoutHeader from '@/components/layout/LayoutHeader'
    import LayoutFooter from '@/components/layout/LayoutFooter'
    import ContentLogin from './ContentLogin'

    export default {
        name: "index",
        components:{
            LayoutHeader,
            LayoutFooter,
            ContentLogin
        }
    }
</script>

<style scoped>
  .main-footer{
    margin-left:0;
    border-top:0;
    text-align:center;
  }
</style>
