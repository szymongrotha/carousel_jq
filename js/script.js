$(function(){
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 5000);

	function changeSlide(){
			carouselList.animate({'marginLeft':-600}, 500, move);
	}

	function changeSlideLeft(){
		carouselList.animate({'marginLeft':+600}, 500, moveLeft);
	}

	function move(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	}

	function moveLeft(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem)
		carouselList.css({marginLeft:0});
	}

	$('.fa-chevron-right').on('click', function() {
			changeSlide()
	})

	$('.fa-chevron-left').on('click', function() {
			changeSlideLeft()
	})
});	

