Template.listItem.helpers({
	galleryImage: function() {
		if (this.photos && this.photos.interior && this.photos.interior.length) {
			var image = Images.findOne(this.photos.interior[0]);
			if (image) {
				return image.url();
			} else {
				return A.imagePlaceholder;
			}
		} else {	
			return A.imagePlaceholder;
		}
	}
});

Template.listItem.events({
	'click a.edit': function(e, t) {
		e.preventDefault();
		Session.set('editPlanId', this._id);
	}
});
