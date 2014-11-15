'use strict';

//Setting up route
angular.module('reports').config(['$stateProvider',
	function($stateProvider) {
		// Reports state routing
		$stateProvider.
		state('search-reports', {
		}).
		state('listReports', {
			url: '/reports',
			templateUrl: 'modules/reports/views/list-reports.client.view.html'
		}).
		state('searchReports', {
			url: '/reports/search',
			templateUrl: 'modules/reports/views/search-reports.client.view.html'
		}).
		state('viewReport', {
			url: '/reports/view/:reportId',
			templateUrl: 'modules/reports/views/view-report.client.view.html'
		});
	}
]);
