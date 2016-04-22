Template.headerFull.onRendered(function() {
	this.$('header').prependTo('body');
});

Template.headerFull.helpers({
	page: function() {
		if (this == 'detail') {
			var planId = Session.get('planId');
			var plan = Plan.findOne({
				slug: planId
			});
			if (plan) {
				return {
					coverImage: 'http://127.0.0.1:3000' + Images.findOne(plan.photos.interior[0]).url(),
					title: plan.name,
					description: '<p>' + plan.description + '</p>'
				}
			}
		} else if (this == 'home') {
			return {
				coverImage: 'http://www.architekti.sk/files/49ca0337fef0c21dbd7ed95a829ba52d.jpg',
				title: 'Kvalita rozhoduje',
				description: '<p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p><a href="#about" class="btn btn-primary btn-xl page-scroll">Pozrite si náš katalóg</a>'
			}
		}
	}
});
