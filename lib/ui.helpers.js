UI.registerHelper('dateFormat', function(d) {
	return moment(d).format("MM/DD/YYYY");
});

UI.registerHelper('getParameter', getParameter);

UI.registerHelper('short', function(string, length) {
	return string.substr(0, length) + (string.length > length ? '...' : '');
});
