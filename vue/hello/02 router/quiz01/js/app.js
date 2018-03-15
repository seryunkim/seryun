var Header = { template: '<header>헤더</header>' };
var Body = { template: '<section>바디</section>' };
var Footer = { template: '<Footer>푸터</Footer>' };
var LoginHeader = { template: '<header>로그인 헤더</header>' };
var LoginBody = { template: '<section>로그인 바디</section>' };
var LoginFooter = { template: '<Footer>로그인 푸터</Footer>' };
var router = new VueRouter({
    routes: [{
        path: '/',
        components: {
            default: Body,
            header: Header,
            footer: Footer
        }
    }, {
        path: '/login',
        components: {
            default: LoginBody,
            header: LoginHeader,
            footer: LoginFooter
        }
    }]
});
var app = new Vue({
    router
}).$mount('#app');