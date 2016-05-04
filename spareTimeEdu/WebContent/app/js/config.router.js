var myModule = angular.module("app", ['ui.router','oc.lazyLoad']);

myModule
.run(
['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
	$rootScope.$state=$state;
	$rootScope.$stateParams=$stateParams;
}])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');     //匹配所有不在上面的路由
	
	$stateProvider
        .state('home',{
            url:'/',
            template:'<div>index</div>',
           //controller:'appCtrl'   //指明控制器
//            resolve:{
//            	deps:['uiLoad',function(uiLoad){
//            		return uiLoad.load(
//            				[
//            		                    
//            		                    
//            		        ]
//            	);
//            	}      
//            ]},
//        	   
        })
        .state('course',{
            url:'/course',
            templateUrl:'course/courseList.html',
//            resolve:{
//            	deps:['$ocLazyLoad',function($ocLazyLoad){
//            		return $ocLazyLoad.load(
//            				[
//            		           'style/teacherList.css',         
//            		                    
//            		        ]
//            	);
//            	}      
//            ]},
        })
        .state('teacher',{
            url:'/teacher',
            templateUrl:'teacher/teacherList.html',
            //controller:'teacherListCtrl',
            resolve:{
            	deps:['$ocLazyLoad',function($ocLazyLoad){
            		return $ocLazyLoad.load([{
                        name: 'app',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                               'style/teacherList.css',
                                'teacher/teacherList.js'
                               ]
                    }]);
            	}   
            	]},
            	
        })
        
}]);
////定义模块的控制器
//myModule.controller('appCtrl', ['$scope', function($scope){
//        alert("Cool, you have registered!");
//
//}]);