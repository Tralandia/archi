FlowRouter.route('/', {
	name: 'List',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout', {
			page: 'list'
		});
	}
});

FlowRouter.route('/:p1', {
	name: 'Detail',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout', {
			page: 'detail'
		});
	}
});
