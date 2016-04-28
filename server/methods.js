Meteor.methods({
	createPlan: function(data) {
		if (!Meteor.userId()) return;

		return C.Plan.insert({
			name: data.name,
			slug: slugify(data.name),
			description: data.description
		});
	},
	editPlan: function(_id, data) {
		if (!Meteor.userId()) return;
		
		return C.Plan.update(_id, {$set: {
			name: data.name,
			slug: slugify(data.slug),
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
			similarPlans: data.similarPlans,
			doubleHouseOption: data.doubleHouseOption,
			suitableForHillside: data.suitableForHillside,
			built: data.built
		}});
	},
	removePlan: function(_id) {
		return Plan.remove(_id);
	}
});
