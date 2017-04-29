$(function() {

	$('#my-menu').mmenu({
	extensions: ['fx-listitems-slide','pagedim-black', 'theme-black',],
	navbar: {
		title: '<img src="img/logo.svg" alt="Logo">'
	},
	offCanvas: {
		position: 'right'
	}
});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
	$('.hamburger').removeClass('is-active');
}); 
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
		carouselServices()
		},100)
	});
	$('.carousel-services').owlCarousel({
    //loop:true,
    nav:true,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1100:{
            items:3
        }
    }

   
});
	$('.carousel-services-content').equalHeights();

	function carouselServices() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselServices();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));		//выделяем каждое второе слово в спан
		});
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));		//выделяем каждое первое слово в спан
		});
	
	$('select').selectize({
		create: true,
	});
	$('.reviews').owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true,
	});

	$('.partners').owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		dots: false,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
        	items: 4
        }
	},
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else	{
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

//E-mail Ajax Send
	$("form.callback").submit(function() { //Change изменить селектор формы с помощью которого обрабатывается скрипт
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change путь до файла
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});