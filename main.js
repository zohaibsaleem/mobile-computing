jQuery(function($){
	$('#back-top').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 150)
		{
			$('.aa').addClass('animated1');
			$('.hi').addClass('hh');
			
		}
		else
		{
			$('.hi').removeClass('hh');
		}
		
		if($(this).scrollTop() > 750)
		{
			$('.hook').css('visibility','visible');		
			$('.hook').addClass('w3-animate-top');
		}
	});
	
	  $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-top').fadeIn(700);
        } else {
            $('#back-top').fadeOut(500);
        }
    });
	 $('#back-top a').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	jQuery.scrollSpeed(100, 800);

});