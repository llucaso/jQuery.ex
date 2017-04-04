$(function(){

	setInterval(function() {
		var carouselList = $("#carousel ul");
		$(carouselList).animate({'margin-left': '-=400px'}, 1000); 300, moveFirstSlide});

	function moveFirstSlide() {
 		var firstItem = carouselList.find("li:first");
 		var lastItem = carouselList.find("li:last");
 		lastItem.after(firstItem);
 		carouselList.css({marginLeft:0});
 	}
	
});





