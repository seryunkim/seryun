<template>
  <!-- side bar -->
	<div class="side_bar">
    <ul class="menu">
      <!-- <li class="on">
        <a href="#none">메뉴1</a>
        <ul class="sub">
          <li><a href="#none">서브메뉴1</a></li>
          <li><a href="#none">서브메뉴2</a></li>
          <li><a href="#none">서브메뉴3</a></li>
        </ul>
      </li>
      <li>
        <a href="#none"  v-on:click="menuClick">메뉴2</a>
      </li>
      <li>
        <a href="#none">메뉴3</a>
        <ul class="sub on">
          <li><a href="#none">서브메뉴1</a></li>
        </ul>
      </li> -->
      <li v-for="(menu, index) in menu">
        <a href="#none" v-on:click="menuClick(index)">{{ menu.cate }}</a>
        <ul class="sub" v-if="subCheck()">
          <li><a href="#none">{{ menu.sub_cate }}</a></li>
        </ul>
      </li>
    </ul>
	</div>
	<!-- //side bar -->
</template>

<script>
require('../../assets/css/layout/sidebar.css');

export default {
  name:'app-side-bar',
  data(){
    return{
      menu:[
        {cate:'menu1',sub:[{sub_cate:'sub1'},{sub_cate:'sub2'},{sub_cate:'sub3'}]},
        {cate:'menu2'},
        {cate:'menu3',sub:[{sub_cate:'sub1'},{sub_cate:'sub2'}]}
      ]
    }
  },
  methods: {
    menuClick(idx){
      console.log('click',idx);
      $('.side_bar').removeClass('on');
      // console.log('click',this.$parent);
    },
    subCheck(){
      //console.log('in',this)
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
