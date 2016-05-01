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
	},
	thumbnails: function() {
		var photos = this.photos;
		if (photos) {
			var thumbnails = [];

			_.each(A.photoTypes, function(photoType) {
				if (photos[photoType]) {
					_.each(photos[photoType], function(imageId) {
						if (thumbnails.length > 3) return;
						var image = Images.findOne(imageId);
						if (image) {
							thumbnails.push({
								url: image.url()
							});
						}
					});
				}
			});

			thumbnails.shift();
			// console.log(thumbnails)

			if (thumbnails.length > 1) {
				return thumbnails;
			} else {
				return []; //A.imagePlaceholder;
			}
		} else {	
			return []; //A.imagePlaceholder;
		}
	}
});

Template.listItem.events({
	'click a.edit': function(e, t) {
		e.preventDefault();
		Session.set('editPlanId', this._id);
	}
});
