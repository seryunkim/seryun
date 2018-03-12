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

// var rootPath = path.join(__dirname, '../', '../');
// require('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
require('./assets/css/reset.css'); //import css from 'file.css';

export default {
  name: 'App',
  components: {
    Header,
    MainSideBar,
    Footer
  }
}

</script>

