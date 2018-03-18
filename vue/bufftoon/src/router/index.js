import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WebToon from '@/components/WebToon'
import My from '@/components/My'
import Game from '@/components/Game'
import More from '@/components/More'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/web/webtoon',
            name: 'WebToon',
            component: WebToon
        },
        {
            path: '/web/my',
            name: 'My',
            component: My
        },
        {
            path: '/web/game',
            name: 'Game',
            component: Game
        },
        {
            path: '/web/more',
            name: 'More',
            component: More
        }
    ]
})