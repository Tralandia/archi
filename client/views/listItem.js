Template.listItem.helpers({
	galleryImage: function() {
		return Images.findOne(this.photos.interior[0]).url();
	}
});

Template.listItem.events({
	'click a.edit': function(e, t) {
		e.preventDefault();
		Session.set('editPlanId', this._id);
	}
});
