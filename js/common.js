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
});
