Template.navbar.onRendered(function() {
	$('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
});

Template.navbar.events({
	'click .logout': function(e, t) {
		e.preventDefault();
		Meteor.logout();
	},
    'click .page-scroll': function(e, t) {
        FlowRouter.go('/');
    },
    'click li.special a': function(e, t) {
        $(window).scrollTop(0);
    }
});
