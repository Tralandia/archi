Meteor.publish("Plans", function () {
	return [C.Parameter.find(), C.Plan.find(), C.Images.find()];
});
