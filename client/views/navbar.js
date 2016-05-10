Template.navbar.onRendered(function() {
	$('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
});

Template.navbar.events({
	'click .logout': function(e, t) {
		e.preventDefault();
		Meteor.logout();
	},
    'click .page-scroll': function(e, t) {
        e.preventDefault();

        var href = $(e.currentTarget).attr('href');

        FlowRouter.go('/');
        Meteor.setTimeout(function() {
            var offset = $(href).offset();
            
            if (!offset) return;
            $('html, body').stop().animate({
                scrollTop: (offset.top - 68)
            }, 1250, 'easeInOutExpo');
        });
    },
    'click li.special a': function(e, t) {
        $(window).scrollTop(0);
    }
});
