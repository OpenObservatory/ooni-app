'use strict';

// Reports controller
angular.module('reports').controller('ReportsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Reports',
	function($scope, $stateParams, $location, Authentication, Reports) {
		$scope.authentication = Authentication;

		// Find a list of Reports
		$scope.find = function() {
			$scope.reports = Reports.query();
		};

		// Find existing Report
		$scope.findOne = function() {
			$scope.report = Reports.get({ 
				reportId: $stateParams.reportId
			});
		};
	}
]);
