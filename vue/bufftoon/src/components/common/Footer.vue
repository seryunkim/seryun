<template>
    <footer class="footer">
        <div class="app_banner" style="background:#ff3a3a">
            <a href="#none"><img src="https://bufftoon.plaync.com//buffweb/m/images/common/img_app_download.png" alt="앱 다운로드 배너"></a>
        </div>
        <div class="f_info">
            <a class="facebook" href="#none"><em>페이스북</em>버프툰의 새로운 소식을 받아보세요</a>
            <a class="buff" href="#none"><em>버프툰 소개</em>버프툰 서비스를 소개합니다</a>
        </div>
        <div class="f_link">
            <ul>
                <li><a href="#none">개인정보처리방침</a></li>
                <li><a href="#none">문의하기</a></li>
                <li><a href="#none">연재문의</a></li>
                <li><a href="#none">플레이엔씨</a></li>
            </ul>
        </div>
        <p class="f_copy">Copyright © NCSOFT Corporation. All Rights Reserved.</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.footer .app_banner{
    height:0;
    padding-bottom:30%;
}
.footer .app_banner img{
    width:100%;
}
.footer .f_info{
    background-color:#fff;
}
.f_info{
    border-bottom:1px solid #d8d8d8;
}
.f_info a{
    display:block;
    padding:20px 15px 20px 45px;
    color:#858585;
    border-top:1px solid #d8d8d8;
}
.f_info em{
    position:relative;
    margin-right:8px;
    font-size:11px;
    line-height:12px;
    font-weight:bold;
}
.f_info .facebook{
    background:url(https://bufftoon.plaync.com/buffweb/m/images/common/ico_footer_f.png) no-repeat 15px 15px;
    background-size:24px;
}
.f_info .facebook em{
    color:#3f559e;
}
.f_info .buff{
    background:url(https://bufftoon.plaync.com/buffweb/m/images/common/ico_footer_b.png) no-repeat 15px 15px;
    background-size:24px;
}
.footer .f_link{
    margin:15px;
}
.f_link:after{
    clear:both;
    display:table;
    content:'';
}
.footer .f_link li{
    position: relative;
    width:50%;
    float:left;
    background-color:#fff;
}
.footer .f_link li:before{
    content:'';
    position:absolute;
    top:0;bottom:-1px;
    left:-1px;right:0;
    border:1px solid #d8d8d8;
}
.footer .f_link a{
    display:block;
    padding:12px 0;
    color:#858585;
    font-size:11px;
    line-height:12px;
    text-align:center;
}
.f_copy{
    color:#858585;
    font-size:10px;
    line-height:11px;
    text-align:center;
    transform:scale(0.9);
    -webkit-transform:scale(0.9);
}
</style>
