var myModule = angular.module("app", ['ui.router','oc.lazyLoad','ui.bootstrap']);

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
//            template:'<div>index</div>',
            templateUrl:'pages/home.html',
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
        .state('teacherList',{
            url:'/teacherList',
            templateUrl:'teacher/teacherList.html',
            //controller:'teacherListCtrl',
            resolve:{
            	deps:['$ocLazyLoad',function($ocLazyLoad){
            		return $ocLazyLoad.load([{
                        name: 'teacherList',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                                'teacher/teacherList.js',
                                'style/teacherList.css'
                               ]
                    }]);
            	}   
            	]},
            	
        })
        .state('teacherDetail',{
            url:'/teacherDetail/:ID',
            templateUrl:'teacher/teacherInfo.html',
            //controller:'teacherListCtrl',
            resolve:{
            	deps:['$ocLazyLoad',function($ocLazyLoad){
            		return $ocLazyLoad.load([{
                        name: 'teacherDetail',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                                'teacher/teacherInfo.js',
                                'style/teacherInfo.css'
                               ]
                    }]);
            	}   
            ]},
        })
         .state('manage',{
            url:'/manage',
            templateUrl:'manage/personalManage.html',
            //controller:'teacherListCtrl',
            resolve:{
            	deps:['$ocLazyLoad',function($ocLazyLoad){
            		return $ocLazyLoad.load([{
                        name: 'teacherDetail',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                                'manage/personalManage.js',
                                'style/back-teacher.css',
                                'style/back-base.css',
                                'style/back-change.css',
                                'style/teacherAready.css',
                                'style/setting.css',
                               ]
                    }]);
            	}   
            ]},
        })
        .state('adminManage',{
            url:'/adminManage',
            templateUrl:'manage/adminManage.html',
            //controller:'teacherListCtrl',
            resolve:{
            	deps:['$ocLazyLoad',function($ocLazyLoad){
            		return $ocLazyLoad.load([{
                        name: 'adminManage',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                                'manage/adminManage.js',
                                'style/back-teacher.css',
                                'style/back-base.css',
                                'style/back-change.css',
                                'style/teacherAready.css',
                                'style/setting.css',
                               ]
                    }]);
            	}   
            ]},
        })
        .state('publish',{
            url:'/publish',
            templateUrl:'course/publishCourse.html',
            resolve:{
            	deps:['$ocLazyLoad',function($ocLazyLoad){
            		return $ocLazyLoad.load([{
                        name: 'teacherDetail',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                                'course/publishCourse.js',
                                'style/publish.css',
                                'style/framework/zyupload/skins/zyupload-1.0.1.min.css',
                                'style/framework/layer/skin/layer.ext.css',
                                'style/framework/mobiscroll/mobiscroll_util.css',
                               ]
                    }]);
            	}   
            ]},
//            	
        })
        
        
}]);
////定义模块的控制器
//myModule.controller('appCtrl', ['$scope', function($scope){
//        alert("Cool, you have registered!");
//
//}]);