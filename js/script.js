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

	clickSlide()

	function clickSlide() {

	$('.one').on('click', function() {
		if (i === 1) {
			changeSlideLeft();
		} else if (i === 2) {
			changeSlideLeft();
			changeSlideLeft();
		} else if (i === 3) {
			changeSlideRight();
			changeSlideRight();
		} else if (i === 4) {
			changeSlideRight();
		}
		checkPoint();
		resetInterval();
	})

	$('.two').on('click', function() {
		if (i === 0) {
			changeSlideRight();
		} else if(i === 2) {
			changeSlideLeft();
		} else if(i === 3) {
			changeSlideLeft();
			changeSlideLeft();
		} else if(i === 4) {
			changeSlideRight();
			changeSlideRight();
		}
		checkPoint();
		resetInterval();
	})

		$('.three').on('click', function() {
		if (i === 0) {
			changeSlideRight();
			changeSlideRight();
		} else if(i === 1) {
			changeSlideRight();
		} else if(i === 3) {
			changeSlideLeft();
		} else if(i === 4) {
			changeSlideLeft();
			changeSlideLeft();
		}
		checkPoint();
		resetInterval();
	})

		$('.four').on('click', function() {
		if (i === 0) {
			changeSlideLeft();
			changeSlideLeft();
		} else if(i === 1) {
			changeSlideRight();
			changeSlideRight();
		} else if(i === 2) {
			changeSlideRight();
		} else if(i === 4) {
			changeSlideLeft();
		}
		checkPoint();
		resetInterval();
	})

		$('.five').on('click', function() {
		if (i === 0) {
			changeSlideLeft();
		} else if(i === 1) {
			changeSlideLeft();
			changeSlideLeft();
		} else if(i === 2) {
			changeSlideRight();
			changeSlideRight();
		} else if(i === 3) {
			changeSlideRight();
		}
		checkPoint();
		resetInterval();
	})



	}
});	

