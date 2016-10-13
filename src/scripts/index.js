//引入swiper
var Swiper = require('./components/swiper/swiper-3.3.1.min.js');
//引入swiper animate
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');
//引入zepto
var $ = require('./components/zepto-modules/_custom');
//引入iscroll
var IScroll = require('./components/iScroll/iScroll');
//console.log(IScroll);
$('#in').hide();
$('#enter').on("tap",function(){
	$('.swiper-container').hide();
	$('#in').show();
	console.log($(this).attr('id'));
	$.post('/api/project',{},function(response){
		var html = "";
		for(var i=0;i<response.length;i++){
			html += "<li>" + response[i].category + "</li>"
		}
		$("#list").html(html);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})
});


$('.photo').height($('.photo').width());
$('.dian').height($('.dian').width());

$('#footer>a').on("tap",function(){
	var nn = $(this).index();
	for(var j=0; j<$('#footer>a').length; j++){
		$('#footer>a').eq(j).attr('class','');
		$('#footer>a').eq(j).attr('class','btnn');
	};
	$(this).attr('class','yien btn');

	var apiT = $(this).attr('id');
	$.post('/api/' + apiT,{},function(response){
		var html = "";
		for(var i=0;i<response.length;i++){
			html += "<li>" + response[i].category + "</li>"
		}
		$("#list").html(html);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})
});

var mySwiper = new Swiper ('.swiper-container', {
	direction: 'vertical',
	pagination : '.swiper-pagination',
	paginationType : 'progress',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
    }, 
    onSlideChangeEnd: function(swiper){ 
        SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
});
//loading
var interval = setInterval(function(){
	if (document.readyState === 'complete'){
		clearInterval(interval);
		$('#load').hide();
		$('.swiper-container').show();
		mySwiper.update();
		console.log('更新成功');
	} else {
		$('#load').show();
	}
},100);