Template.detail.onRendered(function() {
	$(window).scrollTop(0);
    new WOW().init();
});

Template.detail.helpers({
	plan: function() {
		var slug = FlowRouter.current().params.p1;
		Meteor.setTimeout(function() {
			$('.detail-video').fitVids();
		})
		return Plan.findOne({slug: slug});
	},
	coverImage: function() {
        var image = Images.findOne(this.photos.interior[0]);
        return (image ? image.url() : A.imagePlaceholder);
	},
	hasGalleryImages: function(type) {
		return this.photos[type].length;
	},
	galleryImages: function(type) {
		return Images.find({
			_id: {
				$in: this.photos[type]
			}
		});
	},
	getParameter: function(type) {
		return getParameter(this[type]);
	},
	imageUrl: function() {
		return this.url();
	}
});

Template.detail.events({
	'click header a.edit': function(e, t) {
		e.preventDefault();

		var planId = Session.get('planId');
		var plan = Plan.findOne({
			slug: planId
		});
		Session.set('editPlanId', plan._id);
	}
});
