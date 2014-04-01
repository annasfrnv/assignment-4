$(function() {
	$("#menubtn").click(function(){
		if($(this).hasClass('open')){
			$("nav").animate({
	        	left: "-50%"
	        }, 500);     
	        $('section').animate({
	            marginLeft: "0"
	        }, 500);
		} else {
			$("nav").animate({
	        	left: "0"
	        }, 500);
	        $('section').animate({
	            marginLeft: "50%"
	        }, 500);
		}
		$(this).toggleClass('open');
	});

	$( window ).resize(function() {
		if($('#menubtn').hasClass('open')){
			$('#menubtn').trigger('click');
		}
	});
});