<template>
  <!-- side bar -->
	<div class="side_bar on">
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
      <!-- <li class="on" v-for="menu in menu">
        
      </li> -->
      <li v-for="(menu, index) in menu">
        <a href="#none" v-on:click="menuClick(index)">{{ menu.cate }}</a>
        <ul class="sub" v-if="subCheck">
          <li><a href="#none">{{ menu.sub_cate }}</a></li>
        </ul>
      </li>
    </ul>
	</div>
	<!-- //side bar -->
</template>

<script>
// export default {
//   name: 'app-side-bar',
//   data () {
//     return {
//       msg: '사이드바'
//     }
//   }
// }
// new Vue({
//   el: '.side_bar',
//   methods: {
//     say: function (message) {
//       alert(message)
//     }
//   }
// })
// 
// data(){
//   menu:[
//     {cate:'menu1',sub:[{sub_cate:'sub1'},{sub_cate:'sub2'},{sub_cate:'sub3'}]},
//     {cate:'menu2',sub:[]},
//     {cate:'menu3',sub:[{sub_cate:'sub1'},{sub_cate:'sub2'}]}
//   ]
// },
export default {
  // data(){
  //   menu:[
  //     {cate:'menu1'},
  //     {cate:'menu2'},
  //     {cate:'menu3'}
  //   ]
  // },
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
      // console.log('click',this.$parent);
    },
    subCheck(){
      console.log('in',this)
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side_bar{
  position:absolute;
  left:-100px;
  top:0;
  bottom:0;
  width:200px;
  min-height:100%;
  background-color:#000c17;
}
.side_bar.on{
  left:0;
  bottom:0;
}
.menu{
  border-bottom:1px solid #06192b;
}
.menu li{
  border-bottom:1px solid #06192b;
}
.on .sub{display:block;}
/*ul.menu ~ .sub{display:none}*/
.sub{
  display:none;
  background-color:#06192b;
}
a{
  display:block;
  padding:10px 20px;
}
a:hover{
  box-shadow:inset 0 0 0 100px rgba(255,255,255,.05);
}
li{
  color:#fff;
  text-align:left;
}

</style>
