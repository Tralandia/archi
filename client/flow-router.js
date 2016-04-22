FlowRouter.route('/', {
	name: 'Home',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout', {
			page: 'home'
		});
	}
});

FlowRouter.route('/katalog', {
	name: 'List',
	action: function(params, queryParams) {
		BlazeLayout.render('DefaultLayout', {
			page: 'list'
		});
	}
});

FlowRouter.route('/katalog/:p1', {
	name: 'Detail',
	action: function(params, queryParams) {
		Session.set('planId', params.p1);
		BlazeLayout.render('DefaultLayout', {
			page: 'detail',
			params: params
		});
	}
});
