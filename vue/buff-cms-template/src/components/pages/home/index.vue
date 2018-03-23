<template>
  <div class="home">
      <!--hedeaer-->
      <layout-header />
      <!--aside-->
      <layout-side-bar />

      <!--content-->
      <content-home />

      <!--footer-->
      <layout-footer />
  </div>
</template>

<script>
  import LayoutHeader from '@/components/layout/LayoutHeader'
  import LayoutFooter from '@/components/layout/LayoutFooter'
  import LayoutSideBar from '@/components/layout/LayoutSideBar'
  import ContentHome from './ContentHome'

  export default {
    name: "index",
    components:{
      LayoutHeader,
      LayoutSideBar,
      LayoutFooter,
      ContentHome
    }
  }
  // ,
  // data() {
  //   return {
  //     menuList: [
  //       {title:'홈', link:'/', className:'home'},
  //       {title:'웹툰', link:'/web/webtoon', className:'webtoon'},
  //       {title:'내서재', link:'/web/my/reads', className:'my'},
  //       {title:'게임', link:'/web/game', className:'game'},
  //       {title:'이벤트', link:'/web/feeds/611484', className:'event'}
  //     ]
  //   }
  // }
</script>

<style scoped>
  body{
    background:#fff;
  }
</style>
