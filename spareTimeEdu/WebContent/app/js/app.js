myModule.controller('mainCtrl', function($scope, $uibModal, $log){
  $scope.pagination={
		  currentPage:2,
		  totalItems:32,
  }

  $scope.animationsEnabled = true;
  $scope.open = function (isLogin) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'common/enrollWindow.html',
      controller: 'ModalInstanceCtrl',
      size: 'md',
      resolve: {
    	  modalParams: function () {
          return {
        	  isLogin:isLogin
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
})
.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, modalParams) {
	 
  $scope.isLogin = modalParams.isLogin;

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
