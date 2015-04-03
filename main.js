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
			$('.resume').toggleClass('active');
			$('#more').hide();
		});

	}

};

$(document).ready(function(){
	myPage.init();
});