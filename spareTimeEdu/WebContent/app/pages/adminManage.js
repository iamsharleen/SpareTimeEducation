angular.module("app",['ui.bootstrap']).controller('adminManageCtrl',['$scope','$http','$stateParams',
                function($scope,$http,$stateParams){
	
	$scope.temp={
		userManage:true,
		courseManage:false,
	}
	
	$scope.userManage=function(){
		$scope.temp={
				userManage:true,
				courseManage:false,
			}
	}
	$scope.courseManage=function(){
		$scope.temp={
				userManage:false,
				courseManage:true,
			}
	}
	

}]);