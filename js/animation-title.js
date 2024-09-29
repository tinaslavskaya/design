function animateTitle () {
	$('span').each(function(ind, elem) {
		$(this).on('mouseover', function() {
			elem.animate({
				opasity: [0.25, 1],
				color: ['#9932CC', ''],
				transform: 'scaleX(1.2)',
			}, 5000);
		});
		
	});
}
animateTitle ();