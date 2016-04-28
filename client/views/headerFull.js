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
                var description = '<div class="plan-attributes">' +
					'<div class="attribute"><span>Typ domu:</span> ' + getParameter(plan.type) + '</div>' +
					'<div class="attribute"><span>Garáž:</span> ' + getParameter(plan.garage) + '</div>' +
					'<div class="attribute"><span>Strecha:</span> ' + getParameter(plan.roof) + '</div>' +
                '</div>';
				return {
					coverImage: 'http://localhost:3040/' + Images.findOne(plan.photos.interior[0]).url(),
					title: plan.name,
					description: description
				}
			}
		} else if (this == 'home') {
			return {
				coverImage: 'http://www.architekti.sk/files/255d4ec23095e2b52363a5314ee79cc8.jpg',
				title: 'Kvalita rozhoduje',
				description: '<a href="/katalog" class="btn btn-primary btn-xl page-scroll">Pozrite si náš katalóg</a>'
			}
		}
	}
});
