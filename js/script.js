$(".btns>li").click(function(){
 $(this).addClass("active");
 $(this).siblings().removeClass("active")
/*필터 기능*/
let i=$(this).attr('data-filter')
$(".contents").isotope({filter:a})


})

const grid=new Isotope(".contents",{
 itemSelector:'.conbox',
 columnWidth:'.conbox',
 transition:'0.5s'

})

setTimeout(function(){$(".contents").isotope('layout')},100)/*지정된 시간*/

$(".fancybox").fancybox();