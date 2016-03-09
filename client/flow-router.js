FlowRouter.route('/', {
	name: 'List',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout');
	}
});
