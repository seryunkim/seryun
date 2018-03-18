<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
@import url(http://cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css);
*{
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family:'Nanum Barun Gothic' !important;
    word-break:break-all;
}
body{
    background-color:#f8f8f8;
}
body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,table,th,td,form,fieldset,legend,input,textarea,button,select {
    margin:0;
    padding:0;
}
body,input,textarea,select,button,table {
    font-family:"Apple SD Gothic Neo",'돋움',Dotum,sans-serif;
    font-size:12px;
    color:#333;
}
img,fieldset,button {
    border:0;
}
ul,ol {
    list-style:none;
}
em,address {
    font-style:normal;
}
a {
    color:#333;
    text-decoration:none;
    cursor:pointer;
}
caption {
    display:none;
}
button {
    cursor:pointer;
    border-radius:0;
}
img {
    vertical-align:top;
}
select {
    vertical-align:middle;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
caption {
    display:none;
}
th,td {
    text-align:left;
    vertical-align:top;
}
form {
    margin:0;
    height:0;
}
fieldset {
    margin:0;
    padding:0;
    border:0;
}
legend {
    display:none;
}
input:disabled+label,label[class*=disabled] {
    color: #c3c3c3;
}
input[disabled] {
    background-color: #fff;
}
textarea[disabled] {
    background-color: #c3c3c3;
}

/* contents */
.contents{
    margin-top:106px;
    background-color:#fff;
}

/***** 공통 *****/
.list_title{
    display:block;
    padding-bottom:15px;
    background:url(https://bufftoon.plaync.com/buffweb/m/images/common/btn_more.png) no-repeat 100% 0;
    background-size:6.5px 11.5px;
    font-size:14px;
    line-height:18px;
    color:#333;
}

/* 슬라이더 리스트 */
.slider_wrap{
    padding:30px 15px;
    border-top:1px solid #d8d8d8;
    overflow:hidden;
}
.slider_wrap .list{
    overflow-y:hidden;
    overflow-x:scroll;
    -webkit-overflow-scrolling:touch;
    overflow:-moz-scrollbars-none; /*scroll 안보이게*/
    -ms-overflow-style:none;
}
.slider_wrap .list::-webkit-scrollbar { 
    display: none;
}
.slider_wrap ul{
    width:10000px;
}
.slider_wrap li{
    float:left;
}
.slider_wrap li~li{
    padding-left:5px;
}
.slider_wrap li a{
    position:relative;
    display:block;
}
.slider_wrap .img_wrap{
    position:relative;
}
.slider_wrap .img_wrap:before{
    content:'';
    position: absolute;
    left:0;right:0;
    top:0;bottom:0;
    border:1px solid rgba(0,0,0,.2);
}
.slider_wrap li img{
    width:100%;
    height:100%;
}
.slider_wrap li .name{
    display:block;
    margin-top:3px;
    font-size:14px;
    line-height:18px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
}
</style>
