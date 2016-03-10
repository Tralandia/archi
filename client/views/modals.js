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
		if (name) {
			Meteor.call("createPlan", name, function(error, response) {
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
			$("#edit-plan-modal").modal("show");
			return Plan.findOne(planId);
		} else {
			return;
		}
	}
});
