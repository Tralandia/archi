Template.modals.onRendered(function() {
	Session.set("editPlanId", null);
});

Template.adminLoginModal.events({
	'submit form': function(e, t) {
		e.preventDefault();

		var username = t.find("#username").value;
		var password = t.find("#password").value;

		Meteor.loginWithPassword(username, password, function(error, response) {
			if (error) {
				console.log(error);
			} else {
				$("#admin-login-modal").modal("hide");
			}
		});
	}
});

Template.createPlanModal.events({
	'submit form': function(e, t) {
		e.preventDefault();

		var name = t.find("#plan-name").value;
		var description = t.find("#plan-description").value;
		if (name && description) {
			Meteor.call("createPlan", {name: name, description: description}, function(error, response) {
				if (error) {
					console.log(error);
				} else {
					$("#create-plan-modal").modal("hide");
					Session.set("editPlanId", response);
				}
			});
		}
	}
});

Template.editPlanModal.helpers({
	plan: function() {
		var planId = Session.get("editPlanId");
		if (planId) {
			$("#edit-plan-modal").modal("show").on("hide.bs.modal", function() {
				Session.set("editPlanId", false);
			});
			Meteor.setTimeout(function() {
				$("#plan-built").datepicker();
			});
			return Plan.findOne(planId);
		} else {
			return;
		}
	},
	getParameters: function(type) {
		return Parameter.find({type: type});
	},
	isSelected: function(type) {
		var plan = Template.parentData();
		return plan[type] == this._id ? "selected" : "";
	},
	getPhotos: function(type) {
		if (this.photos && this.photos[type] && this.photos[type].length > 0) {
			return Images.find({_id: {$in: this.photos[type]}});
		} else {
			return false;
		}
	}
});

Template.editPlanModal.events({
	'submit form': function(e, t) {
		e.preventDefault();

		var planId = Session.get("editPlanId");
		var builtDate = moment($("#plan-built").val(), "MM/DD/YYYY");
		
		var data = {
			name: $("#plan-name-edit").val(),
			slug: $("#plan-slug-edit").val(),
			description: $("#plan-description-edit").val(),
			roof: $("#plan-roof").val(),
			garage: $("#plan-garage").val(),
			floor: $("#plan-floor").val(),
			livingRoomCount: $("#plan-livingRoomCount").val(),
			usedArea: $("#plan-usedArea").val(),
			usableArea: $("#plan-usableArea").val(),
			usableAreaGround: $("#plan-usableAreaGround").val(),
			usableAreaFloor: $("#plan-usableAreaFloor").val(),
			livingArea: $("#plan-livingArea").val(),
			planPrice: $("#plan-planPrice").val(),
			housePrice: $("#plan-housePrice").val(),
			rooftopHeight: $("#plan-rooftopHeight").val(),
			rooftopAngle: $("#plan-rooftopAngle").val(),
			buildingSpace: $("#plan-buildingSpace").val(),
			bathroomsCount: $("#plan-bathroomsCount").val(),
			entranceOrientation: $("#plan-entranceOrientation").val(),
			photosInterior: $("#plan-photosInterior").val(),
			photosExterior: $("#plan-photosExterior").val(),
			photosViews: $("#plan-photosViews").val(),
			photosBuilds: $("#plan-photosBuilds").val(),
			suitableForHillside: ($("#plan-suitableForHillside").val() == "1" ? true : false),
			energy: $("#plan-energy").val(),
			built: builtDate.toDate()
		}

		Meteor.call('editPlan', planId, data, function(error, result) {
			if (error) {
				console.log(error);
			} else {
				console.log(result);
				$("#edit-plan-modal").modal("hide");
			}
		});
	},
	'change #plan-photosInterior, change #plan-photosExterior, change #plan-photosViews, change #plan-photosBuilds': function(e, t) {
		var files = e.target.files;
		var id = e.target.getAttribute('id')
		var planId = Session.get("editPlanId");

		for (var i = 0, ln = files.length; i < ln; i++) {
			Images.insert(files[i], function (err, fileObj) {
				console.log(fileObj)
				var type = "photos.interior";
				if (id == "plan-photosExterior") {
					type = "photos.exterior";
				} else if (id == "plan-photosViews") {
					type = "photos.views";
				} else if (id == "plan-photosBuilds") {
					type = "photos.builds";
				}
				var update = { $addToSet: {}}
					update.$addToSet[type] = fileObj._id;

				Plan.update(planId, update);
			});
		}
	},
	'click .photos a.remove': function(e, t) {
		e.preventDefault();

		var planId = Session.get("editPlanId");
		var key = "photos." + $(e.currentTarget).data('key');
		var update = { $pull: {} };
			update.$pull[key] = this._id;

		Images.remove(this._id);
		Plan.update(planId, update);
	},
	'click a#remove-plan': function(e, t) {
		e.preventDefault();

		if (confirm("Naozaj chcete vymazať tento projekt?")) {
		 	Meteor.call('removePlan', this._id, function(error, result) {
		 		if (error) {
		 			console.log(error);
		 		} else {
		 			console.log(result);
		 			Session.set("editPlanId", false);
		 			$("#edit-plan-modal").modal("hide");
		 		}
		 	});
		}
	}
});
