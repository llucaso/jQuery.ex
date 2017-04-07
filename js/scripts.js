


$(function(){
	
	//var buttonReverse = $("#reverse"); // nie wiem czy potrzebna mi a zmienna
	var carouselList = $("#carousel ul");
	setInterval(slide, 1000);

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function moveFirstSlideReverse() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.after(lastItem);
		carouselList.css({marginLeft:0});		//moze -400
	};

	function slide() {
		$(carouselList).animate({'marginLeft': '-400px'}, 3000, moveFirstSlide);
	};

	$('#back').on('click', function slide() {
    	$(carouselList).animate({'marginLeft': '400px'}, 3000);
	});

	$('#next').on('click', function slide() {
    	$(carouselList).animate({'marginRight': '-400px'}, 3000);
	});
	
	



		
	
				





	


});




