var myModule = angular.module("app", ['ui.router']);

myModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');     //匹配所有不在上面的路由
	
	$stateProvider
        .state('home',{
            url:'/',
            template:'<div>index</div>',
           controller:'appCtrl'   //指明控制器
        })
        .state('course',{
            url:'/course',
            templateUrl:'course/courseList.html'
        })
        .state('teacher',{
            url:'/teacher',
            templateUrl:'teacher/teacherList.html'
        })
        
}]);
//定义模块的控制器
myModule.controller('appCtrl', ['$scope', function($scope){
//    $scope.formData = {};
//    $scope.submit = function() {
//        alert("Cool, you have registered!");
//    };
}]);