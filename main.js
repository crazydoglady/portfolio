var myPage = {
	init: function() {
		myPage.initStyling();
		myPage.initEvents();
	},
	initStyling: function() {

	},
	initEvents: function() {
		$('#more').on('click', function (event){
			event.preventDefault();
			$('#education').toggleClass('active');
			$('#more').hide();
		});
		$("nav a").click(function(event) {
    		event.preventDefault();
    		var relatedClass = "." + $(this).attr('rel');
    		$(relatedClass).addClass('active');
    		$(relatedClass).siblings('section').removeClass("active");
			//$(this).closest('section').siblings().toggleClass('active');
		});

	}

};

$(document).ready(function(){
	myPage.init();
});