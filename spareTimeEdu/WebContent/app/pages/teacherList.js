angular.module("app", ['ui.bootstrap']).controller('teacherListCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.pagination = {
			recordCount: 24,
			pageIndex: 1,
			pageSize: 5,
			pageCount: 0,
		}
	}
]);