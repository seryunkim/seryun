<template>
  <!-- side bar -->
	<header class="title">
    <div class="h_left">left</div>
		<div class="h_right">right</div>
		<h2>{{msg}}</h2>
	</header>
	<!-- //side bar -->
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: '헤더'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  padding:10px;
  background-color:#fff;
  border-bottom:1px solid #eee;
}
.title:after{
  content:'';
  display:block;
  clear:both;
}
.title > div{cursor:pointer;}
.h_left{float:left;}
.h_right{float:right;}
h2{
  padding:0 40px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}

</style>
