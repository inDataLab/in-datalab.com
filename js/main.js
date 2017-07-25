$(document).ready(function() {
	//var offset = 100; 
	var off = 90; 
	if ( $(window).width()<=737 ){
		off = 120;
	}
	
	
	$(window).scroll(function(){
		console.log('window scroll triggered');
		var h = $('#about').offset().top;
		var hh = $('#about').outerHeight();
		var s = $(this).scrollTop();

		if (s+off < $('#owl-demo').outerHeight()){
			$('#aboutspan').removeClass('underlinecurrent');
	   		$('#aboutspan').removeClass('redchars');
		}

		
		if (h <= s+off && s+off< h+hh-80){
			$('#aboutspan').addClass('underlinecurrent');
		   	$('#aboutspan').addClass('redchars');
		   	$('#techspan').removeClass('underlinecurrent');
		   	$('#techspan').removeClass('redchars');
		   	$('#morespan').removeClass('underlinecurrent');
		   	$('#morespan').removeClass('redchars');
	   	}/*else {
	   		$('#aboutspan').removeClass('underlinecurrent');
	   		$('#aboutspan').removeClass('redchars');
	   	}*/

	   	var t_h, t_hh;
	   	if ( $(window).width()<=737 ){
	   		t_h = $('#technology').offset().top;
	   		t_hh = $('#pctech').outerHeight();
	   	} else {
	   		t_h = $('#pctech').offset().top;
			t_hh = $('#pctech').outerHeight();
	   	}
	   	

		//console.log('t_h: ' , t_h, ' t_hh: ', t_hh, ' s: ', s);
		if (t_h <= s+off && s+off < t_h+t_hh){
			$('#techspan').addClass('underlinecurrent');
		   	$('#techspan').addClass('redchars');
		   	$('#aboutspan').removeClass('underlinecurrent');
		   	$('#aboutspan').removeClass('redchars');
		   	$('#morespan').removeClass('underlinecurrent');
		   	$('#morespan').removeClass('redchars');
	   } /*else {
	   		$('#techspan').removeClass('underlinecurrent');
	   		$('#techspan').removeClass('redchars');
	   }*/

	   	var m_h = $('#box-container').offset().top;
		var m_hh = $('#box-container').outerHeight();

		if (m_h <= s+off && s+off < m_h+m_hh){
			$('#morespan').addClass('underlinecurrent');
	   		$('#morespan').addClass('redchars');
	   		$('#aboutspan').removeClass('underlinecurrent');
	   		$('#aboutspan').removeClass('redchars');
	   		$('#techspan').removeClass('underlinecurrent');
	   		$('#techspan').removeClass('redchars');
	   }/*else {
	   		$('#morespan').removeClass('underlinecurrent');
	   		$('#morespan').removeClass('redchars');
		}*/

	});

	var queries = {
		small: 'screen and (min-width:1px) and (max-width:499px)',
		medium: 'screen and (min-width:500px) and (max-width:1000px)',
		large: 'screen and (min-width:1001px) and (max-width:1500px)',
		huge: 'screen and (min-width:1501px)'
	};

	//$("#stickynav").sticky({topSpacing:0});
	
	var cw = $('.circle_container').width();
	$('.circle_container').css({'height':cw+'px'});

	$("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay : 5000,
	  stopOnHover : true,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: true,
      itemsMobile : true
 
	});

	$('.slide').css('height',$(window).height()-0);
	
	var offset = 90;
	var mobileoffset = 0;
	if ( $(window).width()<=737 ){
		offset = 120;
		mobileoffset = -200
	}
	
	$("#aboutspan").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#about').offset().top-offset
	    }, 400);
	    $('#aboutspan').addClass('underlinecurrent');
	   	$('#aboutspan').addClass('redchars');
	   	$('#techspan').removeClass('underlinecurrent');
	   	$('#techspan').removeClass('redchars');
	   	$('#morespan').removeClass('underlinecurrent');
	   	$('#morespan').removeClass('redchars');
	   	$(window).scroll();
	});

	$("#techspan").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#technology').offset().top-offset-0
	    }, 400);
	    $('#techspan').addClass('underlinecurrent');
	   	$('#techspan').addClass('redchars');
	   	$('#aboutspan').removeClass('underlinecurrent');
	   	$('#aboutspan').removeClass('redchars');
	   	$('#morespan').removeClass('underlinecurrent');
	   	$('#morespan').removeClass('redchars');
	   	$(window).scroll();
	});

	$("#morespan").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#box-container').offset().top -offset-0
	    }, 400);
	    $('#morespan').addClass('underlinecurrent');
   		$('#morespan').addClass('redchars');
   		$('#aboutspan').removeClass('underlinecurrent');
   		$('#aboutspan').removeClass('redchars');
   		$('#techspan').removeClass('underlinecurrent');
   		$('#techspan').removeClass('redchars');
   		$(window).scroll();
	});

});