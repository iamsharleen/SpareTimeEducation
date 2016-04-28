var myModule = angular.module("app", ['ui.router']);

myModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('course',{
            url:'/course',
            template:'<div>index</div>',
           controller:'myFormController'   //指明控制器
        })
        .state('course.list',{
            url:'/list',
            templateUrl:'course/courseList.html'
        })
        .state('course.detail',{
            url:'/optional',
            templateUrl:'form-optional.html'
        })
        .state('form.confirm',{
            url:'/confirm',
            templateUrl:'form-confirm.html'
        });
    
        $urlRouterProvider.otherwise('/course/list');     //匹配所有不在上面的路由
}]);
//定义模块的控制器
myModule.controller('myFormController', ['$scope', function($scope){
    $scope.formData = {};
    $scope.submit = function() {
        alert("Cool, you have registered!");
    };
}]);