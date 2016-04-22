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
	}
});
