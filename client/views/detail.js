Template.detail.onRendered(function() {
	$(window).scrollTop(0);
    new WOW().init();
});

Template.detail.helpers({
	plan: function() {
		var slug = FlowRouter.current().params.p1;
		return Plan.findOne({slug: slug});
	},
	galleryImages: function() {
		return Images.find({
			_id: {
				$in: this.photos.interior
			}
		});
	},
	imageUrl: function() {
		return this.url();
	}
});
