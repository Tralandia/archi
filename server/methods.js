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
			roof: data.roof,
			garage: data.garage,
			floor: data.floor,
			livingRoomCount: data.livingRoomCount,
			usedArea: data.usedArea,
			usableArea: data.usableArea,
			usableAreaGround: data.usableAreaGround,
			usableAreaFloor: data.usableAreaFloor,
			livingArea: data.livingArea,
			planPrice: data.planPrice,
			housePrice: data.housePrice,
			rooftopHeight: data.rooftopHeight,
			rooftopAngle: data.rooftopAngle,
			buildingSpace: data.buildingSpace,
			bathroomsCount: data.bathroomsCount,
			entranceOrientation: data.entranceOrientation,
			photosInterior: data.photosInterior,
			photosExterior: data.photosExterior,
			photosViews: data.photosViews,
			photosBuilds: data.photosBuilds,
			suitableForHillside: data.suitableForHillside,
			built: data.built,
			energy: data.energy
		}});
	},
	removePlan: function(_id) {
		return Plan.remove(_id);
	}
});
