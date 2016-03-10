FlowRouter.route('/', {
	name: 'List',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout', {
			page: 'list'
		});
	}
});

FlowRouter.route('/detail', {
	name: 'Detail',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout', {
			page: 'detail'
		});
	}
});
