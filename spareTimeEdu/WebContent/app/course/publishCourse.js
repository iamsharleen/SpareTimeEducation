angular.module("app",['ui.bootstrap']).controller('publishCourseCtrl',['$scope','$http','$stateParams',
                function($scope,$http,$stateParams){

	var config={
			 headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	};
	
	$scope.save=save;
	$scope.submit=submit;
	$scope.openStartDate=openStartDate;
	$scope.openEndDate=openEndDate;
	
	$scope.temp={
		dateOpened:[false,false],
		
	}
	
	$scope.course={
			SUBJECT:'',
			ADDRESS:'',
			START_TIME:'',
			END_TIME:'',
			DATE_NOTE:'',
			PRICE:'',
			MAX_ATTENDEES:'',
			DURATEION:'',
			DURATION_UNIT:'',
			KEYWORD:'',
			BRIEF:'',
			CONTENT:'',
			TEACHER_NAME:'',
			
	}
	
	$scope.dateOptions = {
		    dateDisabled: disabled,
		    formatYear: 'yy',
		    maxDate: new Date(2020, 5, 22),
		    minDate: new Date(),
		    startingDay: 1
		  };
	
	function disabled(data) {
	    var date = data.date,
	      mode = data.mode;
	    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	  }
	
	function save(){
		$http.post('/spareTimeEdu/course/saveCourse',$.param({courseInfo:JSON.stringify($scope.course)}),config).success(function(data){
			console.log(data);
		});
	}
	
	function submit(){
		$http.post('/spareTimeEdu/course/saveCourse',$.param({courseInfo:JSON.stringify($scope.course)}),config).success(function(data){
			console.log(data);
		});
	}
	
	function openStartDate(){
		$scope.temp.dateOpened[0]=true;
	}
	
	function openEndDate(){
		$scope.temp.dateOpened[1]=true;
	}
	
}]);