angular.module("app",['ui.bootstrap']).controller('manageCtrl',['$scope','$http','$stateParams','$uibModal',
                function($scope,$http,$stateParams,$uibModal){
	
	$scope.profile={
			NICK_NAME:'',
			NAME:'',
			AREA:'',
			NUMBER:'',
			INTRO:''
	}
	
	$scope.temp={
		myProfile:true,
		myPublish:false,
		myEnroll:false,
		myFollow:false,
		isTeacher:true,
	}
	$scope.myProfile=function(){
		$scope.temp={
				myProfile:true,
				myPublish:false,
				myEnroll:false,
				myFollow:false,
				isTeacher:true,
			}
	}
	$scope.myPublish=function(){
		$scope.temp={
				myProfile:false,
				myPublish:true,
				myEnroll:false,
				myFollow:false,
				isTeacher:true,
			}
	}
	
	$scope.myEnroll=function(){
		$scope.temp={
				myProfile:false,
				myPublish:false,
				myEnroll:true,
				myFollow:false,
				isTeacher:true,
			}
	}

	$scope.myFollow=function(){
		$scope.temp={
				myProfile:false,
				myPublish:false,
				myEnroll:false,
				myFollow:true,
				isTeacher:true,
			}
	}
	
	 $scope.animationsEnabled = true;
	  $scope.comment = function () {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'common/commentWindow.html',
	      controller: 'commentCtrl',
	      size: 'md',
	      resolve: {
	    	  modalParams: function () {
	          return {
	        	  };
	        }
	      }
	    });

	    modalInstance.result.then(function(selectedItem) {
	      $scope.selected = selectedItem;
	    }, function() {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
}])
.controller('commentCtrl', function($scope, $uibModalInstance, modalParams,$uibModal) {
	
	 $scope.rate = 7;
	 $scope.max = 10;
	 $scope.isReadonly = false;
	 $scope.hoveringOver = function(value) {
	 $scope.overStar = value;
	 $scope.percent = 100 * (value / $scope.max);
	 };
	 $scope.ratingStates = [
	                         {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	                         {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	                         {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	                         {stateOn: 'glyphicon-heart'},
	                         {stateOff: 'glyphicon-off'}
	                       ];

	  $scope.ok = function () {
	    $uibModalInstance.close();
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	});