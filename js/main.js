$(function(){

	$(".portfolio-item").fadeTo("normal", 1);

	$('.portfolio-item').hover(
		function(){
			$(this).find('.text-wrap').css('opacity', '1');
			$(this).siblings().stop().fadeTo(300, 0.6);
  			$(this).parent().siblings().stop().fadeTo(300, 0.3);
		},
		function(){
			$(this).find('.text-wrap').css('opacity', '0');
			$(this).siblings().stop().fadeTo(300, 1);
  			$(this).parent().siblings().stop().fadeTo(300, 1);
		}
	);//Fading home page images while hovering

	$("#iframe").fancybox({
	    'width'         : '85%',
	    'height'        : '95%',
	    'autoScale'     : false,
	    'transitionIn'  : 'none',
	    'transitionOut' : 'none',
	    'type'          : 'iframe',
	    padding: 0
	});

});

