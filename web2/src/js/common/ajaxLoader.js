
var baseURL = './src/data/mobile.json';
console.log('>>>>>>>>>>ajax');
function loadData(){
  $.ajax({
    type: 'GET',
    url: baseURL,
    success:function(obj){
      console.log('success');
      // console.log('in');
      // return successClbk(obj);
    //   $.each(obj, function(key, value){
    //     var target = key;
    //       $.each(value, function(key, value){
    //           setData(target,value);
    //       });
    //   });
    },
    error:function(request,status,error){
      console.log('error>>>>>>>>',status);
    }
  });
}
// 
// function loadData(){
//     $.ajax(
//         type: 'GET',
//         url: baseURL,
//         success:function(res){
//             return successClbk(res);
//         },
//         error:function(request,status,error){
//             console.log('error>>>>>>>>',status);
//         }
//     );
// }
function successClbk(res){
    console.log('res : ',res);
}