//전역 컴포넌트 등록,속성 노출
Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
});
Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
});
//인스턴스 생성
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello prop Data!',
        message2: 'second message'
    }
});