$(function(){
	console.log(1);
});


$(function(){
   $('.main_dress').slick({
        infinite: true,
  		speed: 1000,
  		fade: true,
  		cssEase: 'linear',
  		arrows: false,
  		autoplay: true
   });
});



$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menuCont").stop().slideToggle();
	});

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});

});