var personApp = angular.module('personApp', []);
app.controller('personCtrl', ['$scope', function($scope){
	$scope.name = "Nate Brenner"

	$scope.tasks = [];
	$scope.addTask = function(){
		if($scope.tasks.indexOf($scope.taskToAdd)!==-1){
			alert("That task already is on the list");
			$scope.taskToAdd = '';
		} else{
			$scope.tasks.push($scope.taskToAdd);
			$scope.taskToAdd = '';
		}
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
