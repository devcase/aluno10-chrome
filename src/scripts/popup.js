$(document).on("click", ".a10-logout-onclick", function(evt) {
	a10().logout();
	a10().khan.login();
});
