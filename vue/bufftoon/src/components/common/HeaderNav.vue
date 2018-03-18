<template>
    <div class="nav">
        <ul>
            <router-link v-for="(item, index) in items" :key="index" tag="li" :to="item.path">
                <a>{{ item.title }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
        items: [
            {title:'홈', path:'/'},
            {title:'웹툰', path:'/web/webtoon'},
            {title:'내서재', path:'/web/my'},
            {title:'게임', path:'/web/game'},
            {title:'더보기', path:'/web/more'}
        ]
    }
  }
}
</script>

<style scoped>
.nav{
    border-top:1px solid #d8d8d8;
    text-align:center;
}
.nav:after{
    clear:both;
    display:table;
    content:'';
}
.nav ul{
    display:inline-block;
    vertical-align:top;
}
.nav li{
    float:left;
}
.nav li a{
    display:inline-block;
    padding:12px 16px;
    font-size:15px;
    line-height:20px;
}
.nav .router-link-exact-active a{
    color:#ff3a3a;
}
</style>
