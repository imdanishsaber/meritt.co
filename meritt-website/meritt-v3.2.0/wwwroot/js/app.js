(function($) {

    "use strict";
/* ----------------------------------------------------------
        2 - Make banner takes the Full Height of the window
    ------------------------------------------------------------ 
    var homeSec = $("#id-home");
    homeSec.height($(window).height());

    $(window).on("resize", function() {
        homeSec.height($(window).height());
    });
	*/

////////////////////////////////////////////////////////
///////////////Floating menu///////////////////////////
////////////////////////////////////////////////////////

var num = window.screen.availHeight + window.screen.availHeight/2 - 100
// var num = 1000; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > num) {
        jQuery('.float-navbar-brand').addClass('display-brand');
        jQuery('.navbar-fixed').addClass('display-brand');
    } else {
        jQuery('.float-navbar-brand').removeClass('display-brand');
        jQuery('.navbar-fixed').removeClass('display-brand');
    }
});
	  
////////////////////////////////////////////////////////
///////////////Smooth scroll for top navbar///////////////////////////
////////////////////////////////////////////////////////


$('#navbar-collapse').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 50,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});
	  
////////////////////////////////////////////////////////
///////////////back to top ///////////////////////////
////////////////////////////////////////////////////////


jQuery(document).ready(function() {
				var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});
				
				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
			})
});
	
})(jQuery);	