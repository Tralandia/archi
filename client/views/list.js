Template.list.onRendered(function() {
	$(window).scrollTop(0);
});

Template.list.helpers({
	plans: function() {
		return Plan.find();
	}
});
