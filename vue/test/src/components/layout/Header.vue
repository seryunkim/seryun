<template>
  <!-- side bar -->
	<header class="title">
    <div class="h_left" v-on:click='onClickMenu()'><i class="fa fa-bars"></i></div>
		<!-- <div class="h_right">right</div> -->
		<h2>{{msg}}</h2>
	</header>
	<!-- //side bar -->
</template>

<script>
require('../../assets/css/layout/header.css');

export default {
  name: 'app-header',
  data () {
    return {
      msg: '타이틀'
    }
  },
  methods: {
    onClickMenu(){
      $('.side_bar').addClass('on');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
