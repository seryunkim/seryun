$(document).ready(function(){
    resizeImg($('.slider_wrap'),3);
    resizeImg($('.today_toon'),2);    
});
$(window).resize(function() {
    resizeImg($('.slider_wrap'),3);
    resizeImg($('.today_toon'),2);
});
function resizeImg($target,$count){
    if($target.length < 0){return;}
    var $img_box = $target;
    var $target_box = $img_box.find('ul');
    var $target_li = $target_box.find('li');
    var lenth = $target_box.children().size();
    var imgSize = Math.ceil($img_box.width() / $count) - ($count + 1);
    //넓이 계산
    $target_li.css({'width':imgSize});
    $target_box.css('width',$target_li.outerWidth() * lenth);   
}