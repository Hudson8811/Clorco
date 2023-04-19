$(document).ready(function () {
	$('#main-fullpage').fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		responsiveWidth: 992,
		anchors: ['offer', 'steps', 'advantages', 'object-type', 'footer'],
		menu: '#menu',
		beforeLeave: function (section, origin, destination, direction, trigger) {
			setTimeout(() => {
				if ($('.main-fullpage__item.active').hasClass('light')) {
					$('.header').addClass('light')
				} else {
					$('.header').removeClass('light')
				}
			}, 50);
		},

	});
})

// spoiler start ===============================================
$(document).on('click', '.js-spoiler-title', function () {
	let parents = $(this).parents('.js-spoiler');
	if (!parents.hasClass('js-spoiler-double')) {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').removeClass('active').removeClass('active');
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').addClass('active');
		} else {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').removeClass('active');
		}
	} else {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').addClass('active');
		} else {
			$(this).parents('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').removeClass('active');
		}
	}
});
// spoiler end ===============================================

$(document).on('click', '.js-menu__btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$('.js-menu').addClass('open');
	} else {
		$(this).removeClass('open');
		$('.js-menu').removeClass('open');
	}
});