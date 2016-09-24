//modal
window.REMODAL_GLOBALS = {
	DEFAULTS: {
		closeOnOutsideClick: false
	}
};

$(function() {

// bg height
	var pageHeight = $('.wrapper').height();

	$(window).resize(function(){
		pageHeight = $('.wrapper').height();
	});


// menu
	$('.js-menu-button').on('click', function(){
		if ($('.js-menu').hasClass('open')) {
			$('.js-menu').removeClass('open').hide();
			$('.js-menu').attr('style', "");
			$('.button-menu_close').css('background-position', '-3px -3px');
			$('.bg').css('display', 'none');

			return false;
		}
		$('.js-menu').addClass('open').show();
		$('.button-menu_close').css('background-position', '-41px -3px');
		$('.bg').css({'height': pageHeight+"px", 'display': 'block'});

	});

//form focus

	$('.input_name').focusin( function(){

		$('.ico-form_1').css(
			"background-position" , "-46px -5px"
		);
	});
	$('.input_name').focusout( function(){

		$('.ico-form_1').css(
			"background-position" , "-5px -5px"
		);
	});

	$('.input_tel').focusin( function(){

		$('.ico-form_2').css(
			"background-position" , "-128px -5px"
		);
	});
	$('.input_tel').focusout( function(){

		$('.ico-form_2').css(
			"background-position" , "-87px -5px"
		);
	});

	$('.input_email').focusin( function(){

		$('.ico-form_3').css(
			"background-position" , "-210px -5px"
		);
	});
	$('.input_email').focusout( function(){

		$('.ico-form_3').css(
			"background-position" , "-169px -5px"
		);
	});


// validator
	// $('.modal__form').validate({
	// 	submitHandler: function(form) {
	// 		$('.modal').hide();
	// 		$('.modal-ok').fadeIn(300);
	// 	}
	// });
	//
	// $( ".input_name" ).rules( "add", {
	// 	required: true
	//
	// });
	// $( ".input_tel" ).rules( "add", {
	// 	required: true,
	// 	digits: true
	//
	// });
	// $( ".input_email" ).rules( "add", {
	// 	required: true,
	// 	email: true
	//
	// });


	$(".services_slider").slick({
		arrows: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		centerMode: false,
		focusOnSelect: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 901,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 761,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0px'

				}
			}
		]

	});
	/* slader top */
	$('.slider-top').slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
	  autoplaySpeed: 2000,
		infinite: true,
	});

//height about
	var heightAbout;
	heightAbout = $('.about-box_right').height();
	$('.about-box_left').height(heightAbout + 90);

/* contact popup */

$('.map-loc').on('click', function(){
	var city = $(this).data('city');
	var loc = $(this).data('loc');
	var tel = $(this).data('tel');
	var email = $(this).data('email');
	$('.address-lauout').fadeIn(300);
	$('.address').fadeIn(700);
	$('.address__name').text(city);
	$('.address__loc span').text(loc);
	$('.address__tel span').text(tel);
	$('.address__email span').text(email);
});

$('.address-lauout').on('click', function(){
	$('.address').fadeOut(200);
	$(this).fadeOut(300);
});
$('.button-close').on('click', function(){
	$('.address').fadeOut(200);
	$('.address-lauout').fadeOut(300);
});

// MAP
	/*var map,
		myIcon;

	DG.then(function () {
		map = DG.map('map', {
			center: [54.957517, 82.809657],
			zoom: 16
		});

	myIcon = DG.icon({
		iconUrl: 'js/map.png',
		iconSize: [71, 61],
		iconAnchor: [30, 50]

	});
	DG.marker([54.957517, 82.809657], {
		icon: myIcon
	}).addTo(map).bindPopup('630052, Архонский переулок, 2а, 1 этаж');

});*/

});

//iconAnchor: [-12, -12]
