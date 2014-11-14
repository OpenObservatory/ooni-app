'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var reports = require('../../app/controllers/reports.server.controller');

	// Reports Routes
	app.route('/reports')
		.get(reports.find);
//.post(users.requiresLogin, reports.create);
  
	app.route('/reports/:reportId')
		.get(reports.read);

  // .put(users.requiresLogin, reports.hasAuthorization, reports.update)
  // .delete(users.requiresLogin, reports.hasAuthorization, reports.delete);

	// Finish by binding the Report middleware
	app.param('reportId', reports.reportByID);
};
