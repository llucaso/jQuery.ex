$(function(){

	var carouselList = $("#carousel ul");
	setInterval(slide, 1000);

	function slide() {
		$(carouselList).animate({'marginLeft': '-400px'}, 300, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	
});





