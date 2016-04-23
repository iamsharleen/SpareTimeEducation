angular.module('app',[]).controller('classListCtrl',['$scope','$http',function($scope,$http){
	
	
	$scope.test="找微课";
	$http.post('query',{}).
		success(function(data){
			$scope.classes=data;
		}).
		error(function(data){
			
		});
}]);