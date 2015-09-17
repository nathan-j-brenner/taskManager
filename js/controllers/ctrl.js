app.controller('ctrl', ['$scope', function($scope){
	$scope.name = 'nate';
	$scope.tasks = [];
	$scope.addTask = function(){
		$scope.tasks.push($scope.taskToAdd);
		$scope.taskToAdd = '';
	};
	$scope.deleteTask = function(task){
		var taskIndex = $scope.tasks.indexOf(task);
		$scope.tasks.splice(taskIndex, 1);
	};
	$scope.editTask = function(task){
		var taskIndex = $scope.tasks.indexOf(task);
		$scope.taskToAdd = $scope.tasks[taskIndex];
		$scope.tasks.splice(taskIndex, 1);
	};
}]);
