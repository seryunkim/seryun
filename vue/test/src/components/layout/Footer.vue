<template>
   <!-- footer -->
   <footer class="m_footer">
   	<!-- <div class="f_btn">
   		<ul>
   			<li>
   				<a href="#none">APP설치</a>
   			</li>
   			<li>
   				<a href="#none">PC버전</a>
   			</li>
   			<li>
   				<a href="#none">로그인</a>
   			</li>
   		</ul>
   	</div> -->
   	<div class="f_wrap">
   		<div class="f_link">
   			<ul>
   				<li>
   					<a href="#none">이용약관</a>
   				</li>
   				<li>
   					<a href="#none">개인정보처리방침</a>
   				</li>
   			</ul>
   		</div>
   		<div class="f_info">
   			<ul>
   				<li>
   					회사정보
   				</li>
   				<li>
   					<address>주소 : 대한민국</address>
   				</li>
   				<li>
   					© seryunkim Inc.
   				</li>
   			</ul>
   		</div>
   	</div>
   </footer>
   <!-- //footer -->
</template>

<script>
require('../../assets/css/layout/footer.css');

export default {
  name: 'app-footer',
  data () {
    return {
      msg: '푸터'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
