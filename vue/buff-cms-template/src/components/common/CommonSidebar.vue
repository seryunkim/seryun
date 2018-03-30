<template>
  <aside v-if="show" class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="treeview" v-for="(item, index) in sidebarAllItems" :key="index">
          <a href="#">
            <span>{{ item.title }}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
              <small class="label pull-right bg-aqua">{{ item.count }}</small>
            </span>
          </a>
          <ul class="treeview-menu">
            <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
              <router-link :to="subItem.path">
                <i class="fa fa-circle-o"></i>{{ subItem.title }}
                <span class="pull-right-container">
                  <small class="label pull-right bg-gray">{{ subItem.count }}</small>
                </span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
  export default {
    name: "common-sidebar",
    data(){
      return{
        show: true,
        sidebarAllItems:[
          { title:'작품관리',
            subItems:[
              {title:'웹툰/만화 관리',path:'/'},
              {title:'웹툰/만화 등록',path:'/'},
              {title:'웹소설 관리',path:'/'},
              {title:'웹소설 등록',path:'/'}]
          },
          { title:'승인관리',
            count:'0',
            subItems:[
              {title:'웹툰/만화 작품',path:'/',count:0},
              {title:'웹툰/만화 화차',path:'/',count:0},
              {title:'웹소설 작품',path:'/',count:0},
              {title:'웹소설 화차',path:'/',count:0}]
          },
          { title:'정산관리',
            subItems:[
              {title:'코인 결제 내역',path:'/'},
              {title:'콘텐츠 구매 내역',path:'/'},
              {title:'정산하기',path:'/'},
              {title:'월별 정산내역',path:'/'}]
          },
          { title:'계정관리',
            count:'0',
            subItems:[
              {title:'계정 조회',path:'/',count:0},
              {title:'계정 승인',path:'/',count:5}]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .main-sidebar{
    padding-top:80px;
    /*background:#fff;*/
    /*border-right:1px solid #d1d1d1;*/
  }
  .treeview-menu ~ .treeview-menu{
    margin:5px 20px;
    padding:0;
    border-top:1px dashed #d1d1d1;
  }
  .treeview-menu ~ .treeview-menu a{
    padding-left:0;
  }
  .treeview-menu i{
    font-size:0.5em;
  }
</style>
