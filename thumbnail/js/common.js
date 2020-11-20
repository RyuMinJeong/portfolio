$(document).ready(function () {


    
 $(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$("#gotop").fadeIn();
	} else {
		$("#gotop").fadeOut();
	}
});

$("#gotop").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
	return false;
});
    
    
    
     $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });

    
    
    
    
    $('.visual').bxSlider({
        auto: true,
        slideWidth: 1000
    });

    $('.dp2,.gnb_bg').hide();

    $('.gnb1,.gnb2>li').mouseover(function () {
        $('.dp2,.gnb_bg').stop().slideDown();
    });

    $('.gnb1,.gnb2>li').mouseleave(function () {
        $('.dp2,.gnb_bg').stop().slideUp();
    });

   



});
