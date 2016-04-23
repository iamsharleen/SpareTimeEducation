angular.module('loginApp',[]).controller('loginCtrl',['$scope','$http',function($scope,$http){
	
	$scope.user={
			USER_NAME:'',
			PASSWORD:'',
	};
	$scope.submit=submit;
	function submit(){
		$scope.user.PASSWORD=hex_md5($scope.user.PASSWORD);
		$.post('/spareTimeEdu/login/login',{'user':JSON.stringify($scope.user)}).
		success(function(data){
			alert(data);
		});
	}
}]);