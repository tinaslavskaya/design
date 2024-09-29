
$(document).ready(function() {

	$('.button-block-5').hover( 
		function () {
			$('.button-block-5').addClass('button-block-5-hover');
	}); 

	$('.button-block-5').mouseleave( 
		function () {
			$('.button-block-5').removeClass('button-block-5-hover');
	}); 	

	$('.button-block-6').mouseenter( 
		function () {
			$('.button-block-6').addClass('button-block-6-hover');
	}); 

	$('.button-block-6').mouseleave( 
		function () {
			$('.button-block-6').removeClass('button-block-6-hover');
	}); 
	
});

