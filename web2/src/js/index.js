// function component() {
//   var element = document.createElement('div');
// 
//   // Lodash, currently included via a script, is required for this line to work
//   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }
// 
// document.body.appendChild(component());
// function test(){
//   
// }
// $( document ).ready(function() {
//     console.log( "ready!!" );
// });

var vm = new Vue({
    el:'',
    methods:{
      
    }
})

//-------------------
// Vue.component('todo-item', {
//   //사용자 속성
//   props:['todo'],
//   template:'<li>{{todo.text}}</li>'
// });
// 
// var todo=new Vue({
//   el:'#todo_app',
//   data:{
//     glist:[
//       {id:0,text:'text1'},
//       {id:1,text:'text2'},
//       {id:2,text:'text3'}
//     ]
//   }
//   
// });
// 
// var app = new Vue({
//   el:'#app',
//   data:{
//     message:'이 페이지는 ' + new Date() + '에 로드 되었다.',
//     todo:[
//       {text:'1'},
//       {text:'12'},
//       {text:'123'}
//     ],
//     seen:true,
//     message2:''
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// });
//------------------------

// Vue.component('todo-item', {
//   // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
//   // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
//   // 이 prop은 todo라는 이름으로 정의했습니다.
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })

// const $ = require('jquery');
// const ajaxLoader = require('./common/ajaxLoader.js');
// const updateQuery = require('_js/m/common/updateQuery');

// setList();
// function setList(){
//     console.log('set init');
//     new Vue({
//         el:"list_wrap",
//         template:"/template/list.html",
//         data:{
//             item:[
//                 {text:'list1'},
//                 {text:'list2'},
//                 {text:'list3'},
//                 {text:'list4'},
//                 {text:'list5'}
//             ]
//         }
//     });
// }

// module.exports = {
//     
// }
// $(function(){
//     console.log( "ready!!" );
//     init();
//     
// });



// new vue({
//   el:'#app',
//   data:{
//     message:'hi'
//   }
// });

// new Vue({
//   el:'#app',
//   data:{
//     message:'이 페이지는 ' + new Date() + '에 로드 되었다.',
//     todo:[
//       {text:'1'},
//       {text:'12'},
//       {text:'123'}
//     ],
//     seen:true
//   }
// });

// 1.뷰 인스턴스 필수 생성 단위
// new Vue({
//   el:'',//타겟 인스턴스
//   template:'',//인스턴스의 화면 내용
//   data:'',//인스턴스 데이터
//   methods:'', //인스턴스 이벤트
//   created:'' //인스턴스 라이프 사이클
// });

// 2.뷰 컴포넌트 코드(구조적 설계를 위한요소)
// Vue.component('my-cmp',{
//   //인스턴스 옵션 속성과 동일
//   template:'',//인스턴스의 화면 내용
//   data:'',//인스턴스 데이터
//   methods:'', //인스턴스 이벤트
//   created:'' //인스턴스 라이프 사이클
//   
// });

// 3.뷰라우터(여러개의 화면간에 이동방법)
// var Main = {template:'<div>main</div>'};
// var Login = {template:'<div>login</div>'};
// var router = new VueRouter({
//   routes:[
//     {path: '/main',component: Main},
//     {path: '/login',component: Login},
//   ]
// });
// var app = new Vue({
//   el:'#app',
//   router: router
// });
// 4.뷰템플릿
// {{message}},
// {{message.split('').reverse().join('')}}
// <p v-bind:id="uid">인스턴스 값과 연결</p>
// <a v-if="seen">seen(bo)값에 따라 표시 여부 결정</a>
// <ul v-for="item in items">{{item.name}}</ul> // for
// <button v-on:click="pAlert">클릭시 경고창 표시</button>