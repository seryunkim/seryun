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
require('../../assets/css/layout/header.css');

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
</style>
