Template.filter.helpers({
	getParameters: function(type) {
		return Parameter.find({type: type});
	}
});
