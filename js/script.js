$(function(){
	var carouselList = $('#carousel ul');
	var interval = setInterval(changeSlideRight, 4000);
	carouselList.css({marginLeft:-600});

	var i = 0;
	checkPoint();

	function checkPoint() {
		if(i === - 1) {
			i = 4;
		} else if (i === 5) {
			i = 0;
		}

		$('.points i').each(function( index ) {
			if(i === index) {
				$(this).removeClass('fa-circle-thin').addClass('fa-circle');
			} else {
				$(this).removeClass('fa-circle').addClass('fa-circle-thin');
			}
		});
	}

	function changeSlideRight(){
		carouselList.animate({'marginLeft':-1200}, 500, moveRight);
	}

	function changeSlideLeft(){
		carouselList.animate({'marginLeft':0}, 500, moveLeft);
	}

	function moveRight(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem)
		carouselList.css({marginLeft:-600});
		i++;
		checkPoint();
	}

	function moveLeft(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem)
		carouselList.css({marginLeft:-600});
		i--;
		checkPoint();
	}

	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(changeSlideRight, 5000);
	}

	$('.fa-chevron-right').on('click', function () {
		changeSlideRight();
		resetInterval();
	})

	$('.fa-chevron-left').on('click', function() {
		changeSlideLeft();
		resetInterval();
	})
});	

