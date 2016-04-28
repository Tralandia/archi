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
		if (type == 'type') {
			return plan.type == this._id ? "selected" : "";
		}
		if (type == 'garage') {
			return plan.garage == this._id ? "selected" : "";
		}
		if (type == 'roof') {
			return plan.roof == this._id ? "selected" : "";
		}
		if (type == 'doubleHouseOption') {
			return this.doubleHouseOption == true ? "selected" : "";
		}
		if (type == 'suitableForHillside') {
			return this.suitableForHillside == true ? "selected" : "";
		}
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
			type: $("#plan-type").val(),
			garage: $("#plan-garage").val(),
			roof: $("#plan-roof").val(),
			landWidth: $("#plan-landWidth").val(),
			landLength: $("#plan-landLength").val(),
			rooftopHeight: $("#plan-rooftopHeight").val(),
			stories: $("#plan-stories").val(),
			livingRoomCount: $("#plan-livingRoomCount").val(),
			bathroomsCount: $("#plan-bathroomsCount").val(),
			capacity: {
				min: $("#plan-capacityMin").val(),
				max: $("#plan-capacityMax").val()
			},
			entranceOrientation: $("#plan-entranceOrientation").val(),
			livingArea: $("#plan-livingArea").val(),
			usedArea: $("#plan-usedArea").val(),
			usableArea: $("#plan-usableArea").val(),
			planPrice: $("#plan-planPrice").val(),
			studyPrice: $("#plan-studyPrice").val(),
			housePrice: $("#plan-housePrice").val(),
			doubleHouseOption: ($("#plan-doubleHouseOption").val() == "1" ? true : false),
			suitableForHillside: ($("#plan-suitableForHillside").val() == "1" ? true : false),
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
	'change #plan-documentation': function(e, t) {
		var files = e.target.files;
		var planId = Session.get("editPlanId");

		for (var i = 0, ln = files.length; i < ln; i++) {
			Files.insert(files[i], function (err, fileObj) {
				var update = {
					$addToSet: {
						documentation: fileObj._id
					}
				}
				Plan.update(planId, update);
			});
		}
	},
	'change #plan-photosInterior, change #plan-photosExterior, change #plan-photosViews, change #plan-photosBuilds': function(e, t) {
		var files = e.target.files;
		var id = e.target.getAttribute('id')
		var planId = Session.get("editPlanId");

		for (var i = 0, ln = files.length; i < ln; i++) {
			Images.insert(files[i], function (err, fileObj) {
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
