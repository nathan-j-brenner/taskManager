app.controller('ctrl', ['$scope', function($scope){
	$scope.name = 'nate';
	$scope.tasks = [];
	$scope.addTask = function(){
		$scope.tasks.push($scope.taskToAdd);
	};
}]);
