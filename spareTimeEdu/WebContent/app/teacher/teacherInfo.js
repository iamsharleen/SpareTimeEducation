angular.module("app",['ui.bootstrap']).controller('teacherInfoCtrl',['$scope','$http','$stateParams',
                function($scope,$http,$stateParams){
	console.log($stateParams.ID);
	var config={
			 headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	};
	$http.post('/spareTimeEdu/teacher/queryTeacheInfo',$.param({ID:$stateParams.ID}),config).success(function(data){
		console.log(data);
	});
}]);