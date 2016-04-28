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
		console.log(Images.find({
			_id: {
				$in: this.photos.interior
			}
		}).fetch())
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
