Meteor.methods({
	createPlan: function(name) {
		var userId = Meteor.userId();
		if (!userId || !name) return;

		return C.Plan.insert({
			name: name,
			type: "",
			garage: "",
			roof: "",
			landWidth: 0,
			landLength: 0,
			rooftopHeight: 0,
			stories: 0,
			livingRoomCount: 0,
			capacity: {
				min: 0,
				max: 0
			},
			bathroomsCount: 0,
			usableArea: 0,
			livingArea: 0,
			usedArea: 0,
			entranceOrientation: "",
			planPrice: 0,
			studyPrice: 0,
			housePrice: 0,
			photos: {
				interior: {},
				exterior: {},
				views: {},
				builds: {}
			},
			similarPlans: {},
			doubleHouseOption: false,
			suitableForHillside: false,
			built: new Date(),
			documentation: {}
		});
	},
	updatePlan: function(_id, data) {

	},
	removePlan: function(_id) {

	}
});
