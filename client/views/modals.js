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