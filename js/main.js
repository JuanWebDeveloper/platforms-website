/*--================================
|-Efecto Menu Fijo                 |       
================================--*/

var menu = $('header nav').offset().top;

$(window).scroll(function(){

	if ($(window).scrollTop() >= menu) {

		$('header nav').addClass('navFixed');

	}else{

		$('header nav').removeClass('navFixed');

	}

});

/*--================================
|-Efecto Menu Responsive           |       
================================--*/
$("#bars").click(function(){


	$("#bars").after($("#menu").slideToggle("slow"));

});
