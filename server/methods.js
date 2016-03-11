Meteor.methods({
	createPlan: function(name) {
		var userId = Meteor.userId();
		if (!userId || !name) return;

		return C.Plan.insert({
			name: name
		});
	},
	editPlan: function(_id, data) {
		return C.Plan.update(_id, {$set: {
			name: data.name,
			description: data.description,
			type: data.type,
			garage: data.garage,
			roof: data.roof,
			landWidth: data.landWidth,
			landLength: data.landLength,
			rooftopHeight: data.rooftopHeight,
			stories: data.stories,
			livingRoomCount: data.livingRoomCount,
			capacity: {
				min: data.capacity.min,
				max: data.capacity.max
			},
			bathroomsCount: data.bathroomsCount,
			usableArea: data.usableArea,
			livingArea: data.livingArea,
			usedArea: data.usedArea,
			entranceOrientation: data.entranceOrientation,
			planPrice: data.planPrice,
			studyPrice: data.studyPrice,
			housePrice: data.housePrice,
			// photos: {
			// 	interior: {},
			// 	exterior: {},
			// 	views: {},
			// 	builds: {}
			// },
			similarPlans: data.similarPlans,
			doubleHouseOption: data.doubleHouseOption,
			suitableForHillside: data.suitableForHillside,
			built: data.built
			// documentation: 
		}});
	},
	removePlan: function(_id) {

	}
});
