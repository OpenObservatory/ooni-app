'use strict';

angular.module('reports').controller('SearchReportsController', ['$scope', '$location', 'ISO3166',
	function($scope, $location, ISO3166) {
    $scope.countries = [];
    angular.forEach(ISO3166.codeToCountry, function(name, code){
      $scope.countries.push({'code': code, 'name': name})
    });
    $scope.$on('country.selected', function(event, args){
      $scope.report_country = args;
    });
    $scope.search = function() {
      var query = {};
      if ($scope.query) {
        query = JSON.parse($scope.query);
      }
      if ($scope.report_country) {
        query['probe_cc'] = $scope.report_country['code'];
      }
      $location.path('/reports').search('find='+JSON.stringify(query));
    };
	}
]);
