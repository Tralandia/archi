C.Images.allow({
  'insert': function () {
    // add custom authentication code here
    return userId ? true : false;
  }
});

C.Parameter.allow({
	insert: function(userId, doc) {
		return userId ? true : false;
	},
	update: function(userId, doc) {
		return userId ? true : false;
	},
	remove: function(userId, doc) {
		return userId ? true : false;
	}
});

C.Plan.allow({
	insert: function(userId, doc) {
		return userId ? true : false;
	},
	update: function(userId, doc) {
		return userId ? true : false;
	},
	remove: function(userId, doc) {
		return userId ? true : false;
	}
});
