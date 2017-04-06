$(function(){
	
	var buttonReverse = $("#Reverse"); // nie wiem czy potrzebna mi a zmienna
	var carouselList = $("#carousel ul");
	setInterval(slide, 1000);

	function slide() {
		$(carouselList)
			.click
			.animate({'marginRight': '-400px'}, 300, moveFirstSlide);

	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function moveFirstSlideReverse() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.after(lastItem);
		carouselList.css({marginLeft:0});
	}
	
	
	
	
				





	


});





