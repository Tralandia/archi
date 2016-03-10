Meteor.publish("Plans", function () {
	return C.Plan.find();
});
