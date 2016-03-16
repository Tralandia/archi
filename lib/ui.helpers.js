UI.registerHelper('dateFormat', function(d) {
	return moment(d).format("MM/DD/YYYY");
});

UI.registerHelper('getParameter', function(d) {
	var parameter = Parameter.findOne(d);
	if (!parameter) return;
	return parameter.name;
});

UI.registerHelper('short', function(string, length) {
	return string.substr(0, length);
});
