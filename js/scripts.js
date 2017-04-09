


$(function(){
	
	var carouselList = $("#carousel ul");
	var interval = setInterval(slide, 1000);   // schowaj to w funkcji!!!

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function moveFirstSlideReverse() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});	// moze -400
			
	};

	function slide() {
		$(carouselList).animate({'marginLeft': '-400px'}, 300, moveFirstSlide);
	}

	$('#next').click(function () {
		clearInterval(interval);
		$(carouselList).animate({'marginLeft': '-400px'}, 300, moveFirstSlide);
		slide ();				//JAK zaladowac setinterval, stop() off() pause()!?
	});


	$('#back').click(function () {
		clearInterval(interval);
		$(carouselList).animate({'marginLeft': '400px'}, 300, moveFirstSlideReverse); // back to start? random pic!
	//					JAK TO RUSZYĆ
	});


$('#reverse').click(function() {
		$(carouselList) // switch?
			.animate({'marginLeft': '400px'}, 1000, moveFirstSlideReverse);


	});




//	$('#run').click(setInterval(function () {
		
//		$(carouselList).animate({'marginLeft': '-400px'}, 1000, moveFirstSlide); }, 300);



//	$('#reverse').click(function (){
//       clearInterval(interval);
    //   $(carouselList).stop();
//    setInterval(slide, 1000);
//       $(carouselList).animate({'marginLeft': '400px'}, 1000, moveFirstSlide);


//        console.log('to jest test reverse');
//    });



//	$('#next').click(slide);
//	$('#back').click(moveFirstSlideReverse);



/*   $('#reverse').click( function() {
		$(carouselList)

			.animate({'marginLeft': '400px'}, 1000, moveFirstSlideReverse);


	}); 



	//if ($(buttonReverse).click === true) {
	//$(buttonReverse).click( function() {console.log('ll');});

//}



/*
	$('#back').click(function () {
    	$(carouselList).animate({'marginLeft': 0}, 3000, moveFirstSlideReverse);
	});

	$('#next').on('click', function slide() {
    	$(carouselList).animate({'marginRight': '-400px'}, 3000);
	});
*/

});




