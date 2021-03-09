$(document).ready(function() {

	/*Убирание placeholder*/
	 $('input, textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	   $(this).attr('placeholder','');
	 });
	 $('input, textarea').blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	 });

	/*работа фиксированного хедера*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20){
			$("header").addClass('fixedtop');
		}
		else{
			$("header").removeClass('fixedtop');
		}
	});

	 /*Вывод всех программ на главной*/
	$(".programs-toggle-link").click(function(){
		$(".programs-list li").slideDown(300);
		$(".programs-toggle").slideUp(300);
	});

	// Галерея
	if($('[data-fancybox]').length){
		$("[data-fancybox]:not(.slick-cloned)").fancybox({
			loop: true,
			transitionEffect: "tube",
			hash: false,
			backFocus : false
		});
	}

	// Слайдер видео
	if($('.video-slider').length){
		$('.video-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 800,
		  	arrows: false,
	      	dots: true,
	      	swipeToSlide: true,
	      	responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
		});
	}

	// Слайдер видео
	if($('.partners-slider').length){
		$('.partners-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			speed: 800,
		  	arrows: true,
	      	dots: false,
	      	swipeToSlide: true,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
		});
	}

	// Слайдер видео
	if($('.reviews-slider').length){
		$('.reviews-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			centerPadding: '484px',
			speed: 800,
		  	arrows: false,
	      	dots: true,
	      	centerMode: true,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        centerPadding: '250px',
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        centerMode: false,
		        centerPadding: '0',
		      }
		    }
		  ]
		});
	}

	// Слайдер новостей маленький
	if($('.news-small-slider').length){
		$('.news-small-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 600,
		  	arrows: false,
	      	dots: true,
	      	swipeToSlide: true,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
		});
	}

	// Слайдер вебинара маленький
	if($('.vebinars-small-slider').length){
		$('.vebinars-small-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 600,
		  	arrows: false,
	      	dots: true,
	      	swipeToSlide: true,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
		});
	}

	// Слайдер преподавателей
	if($('.teachers-slider').length){
		$('.teachers-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 600,
		  	arrows: false,
	      	dots: true,
	      	swipeToSlide: true,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 670,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 440,
		      settings: {
		        slidesToShow: 1,
		        centerPadding: '50px',
		      	centerMode: true,
		      }
		    }
		  ]
		});
	}

	// Слайдер лицензий - 6
	if($('.diploms-slider-6').length){
		$('.diploms-slider-6').slick({
			slidesToShow: 6,
			slidesToScroll: 3,
			speed: 600,
		  	arrows: false,
	      	dots: true,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ]
		});
	}

	// Слайдер лицензий - 5
	if($('.diploms-slider-5').length){
		$('.diploms-slider-5').slick({
			slidesToShow: 5,
			slidesToScroll: 3,
			speed: 600,
		  	arrows: false,
	      	dots: true,
	      	responsive: [
		    {
		      breakpoint: 1169,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ]
		});
	}

	// Слайдер клиентов программы
	if($('.clients-slider').length){
		$('.clients-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			speed: 600,
		  	arrows: true,
	      	dots: false,
	      	responsive: [
		    {
		      breakpoint: 1019,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ]
		});
	}

	// Масонри
	if($('.programs-masonry').length){
		$(".programs-masonry").masonry({
			columnWidth: '.programs-tabs-block',
			itemSelector: '.programs-tabs-block',
			percentPosition: true
		});
	}

	/*работа меню*/
	$(".header-buter").click(function () {
		$(".header-bottom").fadeIn(300);
	});
	
	$(".header-menu-close").click(function () {
		 $(".header-bottom").fadeOut(300);
	});

	/*Фиксация блока*/
	if($('.sticky-block').length){
		var window_width = $( window ).width();

	    if (window_width < 1020) {
	      $(".sticky-block").trigger("sticky_kit:detach");
	    } else {
	      make_sticky();
	    }

	    $( window ).resize(function() {
	      	window_width = $( window ).width();
	      	if (window_width < 1020) {
	        	$(".sticky-block").trigger("sticky_kit:detach");
	      	} else {
	        	make_sticky();
	      	}
	    });
		
		function make_sticky() {
			$(".sticky-block").stick_in_parent({
	       		offset_top: 120
	      });
	    }
	}

	/*колонки списка*/
	if($('.program-intro-list').length){
		$('.program-intro-list').autocolumnlist({
	        columns: 2
	    });
	}

	// Отложенное видео
	if($('.js-lazyYT').length){
		$('.js-lazyYT').lazyYT();
	}

	// убирание картинки из плейсхолдера
	/*$('.program-help-form input').keyup(function(){
		if( $(this).val() !== ''){
			$(this).siblings('.input-pic').fadeOut(100);
		}
		else{
	   		$(this).siblings('.input-pic').fadeIn(100);
		}
	});*/

});


var widthScreen = $(window).width();

// Слайдер новостей
if($('.news-slider').length){
	var $carousel = $('.news-slider');

	function showSlider($widthScreen) {
		if ($widthScreen <= "767") {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
		      		swipeToSlide: true,
					responsive: [
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				      }
				    }
				  ]
				});
			}
		} else {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		}   
	}
	
	$(window).ready(showSlider(widthScreen)).resize(
		function () {
			var widthScreen = $(window).width();
			showSlider(widthScreen);
		}
	);
}
	
if($('.vebinars-slider').length){
	// Переключение слайдера товаров в лк
	var $carousel2 = $('.vebinars-slider');

	function showSliderScreen2($widthScreen) {
		if ($widthScreen <= "767") {
			if (!$carousel2.hasClass('slick-initialized')) {
				$carousel2.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
		      		swipeToSlide: true,
				});
			}
		} else {
			if ($carousel2.hasClass('slick-initialized')) {
				$carousel2.slick('unslick');
			}
		}   
	}

	$(window).ready(showSliderScreen2(widthScreen)).resize(
		function () {
			var widthScreen = $(window).width();
			showSliderScreen2(widthScreen);
		}
	);
}
