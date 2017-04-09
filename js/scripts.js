$(function(){
	
	var carouselList = $("#carousel ul");
	var	moveSlidesRight = true;
	var interval = setInterval(slideToRight, 3000);

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

	function slideToRight() {
		$(carouselList).animate({'marginLeft': '-400px'}, 2000, moveFirstSlide);
	}

	function slideToLeft() {
		moveLastSlide();
		$(carouselList).animate({'marginLeft':'0'}, 2000);
	}

	$('#next').click(function () {
		clearInterval(interval);
		slideToRight();
		interval = setInterval(slideToRight, 3000);
	});

	$('#back').click(function () {
		clearInterval(interval);
		slideToLeft();
		interval = setInterval(slideToRight, 3000);
	});

	$('#reverse').click(function () {
		clearInterval(interval);
		if (moveSlidesRight === true){
			setInterval(slideToLeft, 3000);
			moveSlidesRight = false;
		} else {
			setInterval(slideToRight, 3000);
			moveSlidesRight = true;
		}
	});
});




