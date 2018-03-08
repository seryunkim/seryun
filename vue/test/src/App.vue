<template>
  <div id="app" class="wrap">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
	
    <Header/>
	<div class=''>
		
	</div>
	<MainSideBar/>
    <section class='contents'>
      contents
    </section>
	<Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainSideBar from './components/layout/MainSideBar'

export default {
  name: 'App',
  components: {
    Header,
	MainSideBar,
	Footer
  }
}
</script>

<style>
#app {
	position:relative;
  min-height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}
html {
	height:100%;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
body {
	height:100%;
	font-family: $font-family-base;
	font-size: $font-size-base;
	line-height: 1.2;
	color:#666;
	background-color:#f5f5f5;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%; /* 뷰표트 변환시 폰트크기 자동확대 방지 */
	word-break: break-all;
	-webkit-animation: bugfix infinite 1s; /*안드로이드 라디오 checked~안되는 버그*/
}

body,dl,dd,ul,ol,menu,h1,h2,h3,h4,h5,h6,pre,form,fieldset,figure,legend,p,blockquote,input,optgroup,select,textarea,button {
	margin: 0;
	padding: 0;
	font-weight: inherit;
	outline: none;
}

fieldset {
	border: 0;
}

img {
	width: 100%;
	border: 0;
	vertical-align: top;
}

dl,ul,ol,menu,li {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after, q:before,q:after {
	content: '';
	content: none;
}

address,cite,code,dfn,em,var {
	font-style: inherit;
	font-weight: inherit;
}

caption {
	width:0;
	height:0;
	font-size: 0;
	overflow:hidden;
}
hr,legend {
	display: none;
}

a,button {
	padding: 0;
	overflow: visible;
	border: 0 none;
	font: inherit;
	background: none;
	cursor: pointer;
	color:inherit;
	text-decoration:none;
	box-sizing:border-box;
}

button,input,optgroup,select,textarea {
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	line-height: inherit;
	outline:none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
select,
input[type='text'],
input[type='number'],
input[type='password'],
input[type='submit'],
input[type='search'],
input[type='tel'] {
	appearance:none;
	border-radius:0;
	box-sizing:border-box;
}
button,
input[type='button'],
input[type='submit'],
input[type='reset'],
input[type='file'] {
	-webkit-appearance:button; 
	border-radius:0;
}
button[disabled] {
	cursor:default;
}
input[type='search']::-webkit-search-cancel-button {
	appearance:none;
}
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
	appearance:none;
	margin: 0;
}
textarea {
  border-radius:0;
  box-shadow:none;
  appearance:none;
}
textarea::-moz-focus-inner {
  padding: 0;
  border: 0;
}


</style>
