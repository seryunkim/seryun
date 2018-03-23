<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu">
                <li class="treeview menu-open active" v-for="item in items">
                  <a href="#">
                    <span>{{ item.title }}</span>
                    <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="#">웹툰/만화 관리</a></li>
                    <li><a href="#">웹툰/만화 등록</a></li>
                  </ul>
                  <ul class="treeview-menu">
                    <li><a href="#">반려 내역 보기</a></li>
                  </ul>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
    export default {
        name: "layout-side-bar",
        data(){
          return{
            items: [
              {title:'작품관리', count:'0'},
              {title:'작품관리', count:'0',sub:[{title:'관리',path:'/',count:'2'}]}
            ]
          }
        },
        methods:{
          // menuClick:function () {
          //   this.treeview menu-open
          //   activeClass:'menu-open'
          // }
        }
        /*props: {
          items: {
            type: Array,
            default() {return [];}
          }
        }*/
        // data () {
        //   return {
        //     items: [
        //       {
        //           menu: '작품관리', count: '0',sub: [
        //           {title: '웹툰/만화 관리', path: '/'},
        //           {title: '웹툰/만화 등록', path: '/'},
        //           {title: '웹소설 관리', path: '/'},
        //           {title: '웹소설 등록', path: '/'}
        //         ]
        //       }, {
        //           menu: '승인관리', count: '0',sub: [
        //           {title: '웹툰/만화 작품', count: '5', path: '/'},
        //           {title: '웹툰/만화 등록', path: '/'},
        //           {title: '웹소설 관리', path: '/'},
        //           {title: '웹소설 등록', path: '/'},
        //           {title: '반려 내역 보기', path: '/'}
        //         ]
        //       }, {
        //         menu: '정산관리',
        //         sub: [
        //           {title: '코인 결제 내역', path: '/'},
        //           {title: '콘텐츠 구매 내역', path: '/'},
        //           {title: '정산하기', path: '/'},
        //           {title: '월별 정산내역', path: '/'}
        //         ]
        //       }, {
        //         menu: '계정관리',
        //         sub: [
        //           {title: '계정 조회', path: '/'},
        //           {title: '계정 승인', path: '/'},
        //           {title: '반려 내역 보기', path: '/'}
        //         ]
        //       },
        //     ]
        //   }
        // }
    }
</script>

<style scoped>
  .main-sidebar{
    padding-top:100px;
    background:#fff;
    border-right:1px solid #d1d1d1;
  }
  .treeview-menu ~ .treeview-menu{
    margin:5px 20px;
    padding:0;
    border-top:1px dashed #d1d1d1;
  }
  .treeview-menu ~ .treeview-menu a{
    padding-left:0;
  }
</style>
