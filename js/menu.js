$(function() {
	$("#menubtn").click(function(){
		if($(this).hasClass('open')){
			$("ul#menu").animate({
	        	left: "-50%"
	        }, 500);     
	        $('section').animate({
	            marginLeft: "0"
	        }, 500);
		} else {
			$("ul#menu").animate({
	        	left: "0"
	        }, 500);
	        $('section').animate({
	            marginLeft: "50%"
	        }, 500);
		}
		$(this).toggleClass('open');
	});
});