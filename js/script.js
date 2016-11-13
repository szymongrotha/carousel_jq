$(function(){
	var carouselList = $('carousel ul');

	$(function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 500, move);
			setInterval(changeSlide, 3000);

	})

	$(function move(){
		var firstItem = carouselList.find('li:fist');
		var lastItem = carouselList.find('li:last');

		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});

	})


});	
