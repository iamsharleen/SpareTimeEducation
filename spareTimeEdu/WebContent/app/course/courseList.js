angular.module('courseList',[]).controller('courseListCtrl',['$scope','$http',function($scope,$http){
	
	$scope.condition={
			keyword:'',
	};
	
	$scope.course={
			courseList:[],
	};
	
	

//	JSON.stringify($scope.condition)
	$scope.search=search;
	function search(){
//	$http.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";
		var req = {
				 method: 'POST',
				 url: '/spareTimeEdu/course/getCourseList',
				 headers: {
//					 'Accept':'*/*',
					 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
//					 'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
					 'X-Requested-With':'XMLHttpRequest',
				 },
				 data:$.param({cond:JSON.stringify($scope.condition)}),
				};
		
		$http(req).then(function(reponse){
			console.log(reponse);
			$scope.result=reponse.data;
		});
	}
}]);