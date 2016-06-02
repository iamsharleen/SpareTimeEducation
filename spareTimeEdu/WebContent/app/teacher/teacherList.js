angular.module("app",['ui.bootstrap']).controller('teacherListCtrl',['$scope','$http',
                function($scope,$http){
	$scope.chooseType=chooseType;
	$scope.choosePrice=choosePrice;
	$scope.chooseKeyword=chooseKeyword;
	$scope.changeOrderBy=changeOrderBy;
	$scope.search=search;
	$scope.getData=getData;
	
	var config={
			 headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	};
	$scope.condition={
			TITLE:'',
			TYPE:'',
			PRICE:'',
			KEYWORD:'',
			ORDERBY:'ALL',
			pageInfo:{
				pageIndex:1,
				pageSize:5,
			}
	
	};
	
	$scope.category={
			courseTypes:[],
			priceList:['ONE','TWO','THREE','FOUR'],
			keywords:[]
	}
	$scope.courseList=[];
	$scope.pagination={
			recordCount:0,
			pageIndex:1,
			pageSize:5,
			pageCount:0,
	}
	
	$http.post('/spareTimeEdu/common/getCategories',$.param({bizKey:'TEACHER'}),config).success(function(data){
		console.log(data);
		$scope.category=data;
		$scope.category.priceList=['ONE','TWO','THREE','FOUR'];
	});
	$http.post('/spareTimeEdu/course/getCourse',$.param({cond:JSON.stringify($scope.condition)}),config)
		.success(function(data){
		if(data){
			console.log(data);
			$scope.courseList=data.courseInfoList;
			$scope.pagination=data.pageInfo;
		}
	});
	
	function getData(data){
		$scope.courseList=data.courseInfoList;
		
	}
	
	function chooseType(index){
		$scope.condition.TYPE=$scope.category.type[index].CODE;
	}
	function choosePrice(index){
		$scope.condition.PRICE=$scope.category.price[index];
	}
	function chooseKeyword(index){
		$scope.condition.KEYWORD=$scope.category.keyword[index].ID;
	}
	function changeOrderBy(data){
		$scope.condition.ORDERBY=data;
	}
	
	function search(){
		$http.post('/spareTimeEdu/course/getCourse',$.param({cond:JSON.stringify($scope.condition),pageInfo:JSON.stringify($scope.pagination)}),config)
		.success(function(data){
		if(data){
			console.log(data);
			$scope.courseList=data.courseInfoList;
			
		}
	});
	}
}])

.filter('priceFilter', function() {
  return function(name) {
    if(name=='ONE'){
    	return '0-100';
    }else if(name=='TWO'){
    	return '100-300';
    }else if(name=='THREE'){
    	return '300-500';
    }else if(name=='FOUR'){
    	return '500+';
    }
  };
});
	//$scope.search=search;
	
//	var req = {
//			 method: 'POST',
//			 url: '/spareTimeEdu/course/getCourse',
//			 headers: {
////				 'Accept':'*/*',
//				 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
////				 'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
//				 'X-Requested-With':'XMLHttpRequest',
//			 },
//			 data:$.param({cond:JSON.stringify($scope.condition)}),
//			};
//	
//	$http(req).then(function(reponse){
//		console.log(reponse.data.obj);
//		$scope.course=reponse.data.obj;
//	});
//	$http.post('/spareTimeEdu/course/getCourse',$.param({cond:JSON.stringify($scope.condition)})).success(response){
//		
//	}
//	
//}]);
//

