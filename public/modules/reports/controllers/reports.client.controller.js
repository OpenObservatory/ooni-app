'use strict';

// Reports controller
angular.module('reports').controller('ReportsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Reports',
	function($scope, $stateParams, $location, Authentication, Reports) {
		$scope.authentication = Authentication;
    var params = $location.search();
    $scope.items_per_page = 20;
    $scope.query = {};
    if (params['find']) {
      $scope.query = JSON.parse(params['find']);
    }
    $scope.page_number = 0;

		// Find a list of Reports
		$scope.find = function() {
			$scope.reports = Reports.query({"limit": $scope.items_per_page,
                                      "skip": 0, "find": $scope.query});
		};

		// Find existing Report
		$scope.findOne = function() {
			$scope.report = Reports.get({ 
				reportId: $stateParams.reportId
			});
		};

    $scope.loadNextPage = function() {
      $scope.page_number += 1;
      Reports.query({"limit": $scope.items_per_page,
                     "skip": $scope.page_number*$scope.items_per_page,
                     "find": $scope.query,
                    },
                     function(new_reports){
        $scope.reports = $scope.reports.concat(new_reports);
      });
    }
	}]);
