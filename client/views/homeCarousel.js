Template.homeCarousel.onRendered(function() {
	Meteor.setTimeout(function() {
		var owl = $('.owl-carousel').owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'],
			responsive:{
				0: {
					items: 1
				}
			},
			autoplay: true,
			autoplaySpeed: 1000
		});
		owl.on('change.owl.carousel', function(event) {
			$(this).find('.owl-item').addClass('fadeOut');
		});
	}, 200);
});

Template.homeCarousel.helpers({
	plan: function() {
		return Plan.find();
	},
	coverImage: function() {
		if (this.photos && this.photos.interior && this.photos.interior.length) {
			var image = Images.findOne(this.photos.interior[0]);
			if (image) {
				return image.url();
			}
		}
	}
});
