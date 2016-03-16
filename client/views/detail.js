Template.detail.helpers({
	plan: function() {
		var slug = FlowRouter.current().params.p1;
		return Plan.findOne({slug: slug});
	},
	galleryImage: function() {
		return Images.findOne(this.photos.interior[0]).url();
	}
});
