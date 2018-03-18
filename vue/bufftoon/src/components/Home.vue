<template>
  <section class="contents home">
      <!-- 슬라이드배너 -->
      <SlideBanner v-bind="slideBannerData"/>
      <!-- 오늘의 웹툰  -->
      <SpecialToon v-bind="todayWebtoonData"/>
      <!-- 추천 툰 -->
      <div class="toon_visual hot_toon">
          <a href="#none">
              <div class="info">
                  <p class="txt">버프툰 강력 추천</p>
                  <p class="info_tit">무리수의 나날</p>
                  <p class="info_comment">개화기의 려한,<br />무리수고등학교에서 벌어지는<br />무리수 가득한 나날</p>
                  <p class="info_author">글, 그림: Ra.P.A., Ya.M.A.</p>
                  <span class="go_toon">툰 보러가기</span>
              </div>
              <div class="img_wrap"><img src="https://buffimgs.plaync.com/buff/webtoon/toon_c/toon_c_m_39-1.jpg" alt="무리수의 나날" /></div>
          </a>
      </div>
      <!-- 스페셜 -->
      <SpecialToon v-bind="specialToonData1"/>
      <!-- 스페셜 -->
      <SpecialToon v-bind="specialToonData2"/>
      <!-- 스페셜 -->
      <SpecialToon v-bind="specialToonData3"/>

  </section>
</template>

<script>
import SlideBanner from '@/components/sections/SlideBanner'
import SpecialToon from '@/components/sections/SpecialToon'

export default {
  name: 'Home',
  components: { SlideBanner, SpecialToon },
  data () {
    return {
        slideBannerData: {
            items: [
                {image:'https://buffimgs.plaync.com/buff/banner/180312_main_banner_m.jpg'},
                {image:'https://buffimgs.plaync.com/buff/banner/180306_main_banner_m.jpg'},
                {image:'https://buffimgs.plaync.com/buff/banner/180207_main_banner_m.jpg'},
                {image:'https://buffimgs.plaync.com/buff/banner/180118_main_banner_m.jpg'},
                {image:'https://buffimgs.plaync.com/buff/banner/main_banner_m_59_2.jpg'},
                {image:'https://buffimgs.plaync.com/buff/banner/171218_main_banner_m.jpg'},
                {image:'https://buffimgs.plaync.com/buff/banner/180105_main_banner_m.jpg'}
            ]
        },
        todayWebtoonData: {
            isTodayToon: true,
            cellCount: 2,
            title: '오늘의 웹툰',
            items: [
                {title:'핑쿠핑쿠 다이어리', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_44.jpg'},
                {title:'너의 마법을 속여라', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_38.jpg'},
                {title:'피그맨', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_51.jpg'},
                {title:'에디슨 컴플렉스', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_58.jpg'},
                {title:'럼블 온 더 캠퍼스', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_25.jpg'},
                {title:'19녀들의 수다', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_22.jpg'},
                {title:'무리수의 나날', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_39-1.jpg'},
                {title:'에디슈타인', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_60.jpg'},
                {title:'러브픽시', image:'https://buffimgs.plaync.com/buff/webtoon/toon_a/toon_a_73.jpg'}
            ]
        },
        specialToonData1: {
            title: '봄에는 두근두근 설레는 \'신작\'',
            items: [
                {title:'리트라이', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_76.jpg'},
                {title:'야신을위하여', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_75.jpg'},
                {title:'러브픽시', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_73.jpg'},
                {title:'그마을의히어로', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_62.jpg'},
                {title:'다정종합병원', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_64.jpg'},
                {title:'부적격그녀', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_61.jpg'},
                {title:'검의계승자', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_40-1.jpg'},
                {title:'72가지의틈새', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_46.jpg'},
                {title:'LOSTYOU', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_57.jpg'},
                {title:'무리수의나날', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_39-1.jpg'}
            ]
        },
        specialToonData2: {
            title: '달콤 쌉싸름한 \'로맨스\'',
            items: [
                {title:'너를싫어하는방법', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_36.jpg'},
                {title:'로미오가줄리엣', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_48.jpg'},
                {title:'너란꽃을피워줘', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_53.jpg'},
                {title:'부적격그녀', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_61.jpg'},
                {title:'막순이', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_26.jpg'},
                {title:'주전부리', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_13-1.jpg'},
                {title:'서른살을살았어', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_12.jpg'},
                {title:'핑쿠핑쿠다이어리', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_44.jpg'}
            ]
        },
        specialToonData3: {
            title: '버프툰에 상륙한 \'엔씨코믹스\'',
            items: [
                {title:'엄마,나그리고꼬미', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_69.jpg'},
                {title:'무명소년', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_72.jpg'},
                {title:'디어마이메랑', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_68.jpg'},
                {title:'권희', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_71.jpg'},
                {title:'아버지의카메라', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_66.jpg'},
                {title:'RAGE', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_70_re.jpg'},
                {title:'골든거너', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_67.jpg'},
                {title:'희망의씨앗', image:'https://buffimgs.plaync.com/buff/webtoon/toon_b/toon_b_65.jpg'}
            ]
        }
    }
  }
}
</script>

<style scoped>
/***** 페이지 *****/
/* 오늘의 웹툰 */
.today_toon li .name{
    position:absolute;
    top:30px;
    left:0;right:0;
    margin:0;
    text-align:center;
}
/* 추천웹툰 */
.toon_visual{
    position:relative;
}
.toon_visual .info{
    position:absolute;
    top:20px;bottom:10px;
    left:10px;
    width:120px;
}
.toon_visual .txt{
    color:#ff3a3a;
}
.toon_visual .info_tit{
    font-size:21px;
    line-height:23px;
}
.toon_visual .info_comment,.hot_toon .info_author{
    color:#858585;
    font-size:9px;
    line-break:12px;
}
.toon_visual .go_toon{
    position:absolute;
    bottom:0;
    padding:5px 10px;
    border:1px solid #ff3a3a;
    color:#ff3a3a;
    font-size:10px;
    line-height:11px;
}
.toon_visual img{
    width:100%;
}
</style>