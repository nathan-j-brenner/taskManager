var peopleApp = angular.module('peopleApp', []);
peopleApp.controller('peopleCtrl', ['$scope', function($scope){
	// $scope.tasks = [];
	// $scope.addTask = function(){
	// 	if($scope.tasks.indexOf($scope.taskToAdd)!==-1){
	// 		alert("That task already is on the list");
	// 		$scope.taskToAdd = '';
	// 	} else{
	// 		$scope.tasks.push($scope.taskToAdd);
	// 		$scope.taskToAdd = '';
	// 	}
	// };
	// $scope.deleteTask = function(task){
	// 	var taskIndex = $scope.tasks.indexOf(task);
	// 	$scope.tasks.splice(taskIndex, 1);
	// };
	// $scope.editTask = function(task){
	// 	var taskIndex = $scope.tasks.indexOf(task);
	// 	$scope.taskToAdd = $scope.tasks[taskIndex];
	// 	$scope.tasks.splice(taskIndex, 1);
	// };
	$scope.people = [
		{
			"name": "Nate",
			"tasks": []
		}
	];
	$scope.createPerson = function(person){
		$scope.name = false;
		if(!$scope.personToAdd){
			alert("Please tell us your name");
		}
		for(var i = 0; i<$scope.people.length; i++){
			if($scope.people[i].name===$scope.personToAdd){
				return alert("That person already exists");
			} else{
				$scope.name = true;
			}
		} 
		if($scope.name){ 
			$scope.people.push({"name": $scope.personToAdd, "tasks": []});
		}
		$scope.personToAdd = '';
	};
	$scope.deletePerson = function(person){
		// $scope.people.pop();
		var personIndex;
		for(var i = 0; i<$scope.people.length; i++){
			if($scope.people[i].name===$scope.personToAdd){
				personIndex = i;
			}
		}
		if(personIndex){
			$scope.people.splice(personIndex, 1);
			$scope.personToAdd = '';
		} else{
			alert("That person doesn't have a list yet");
		}
	};
	$scope.addTask = function(name, task){
		for(var i = 0; i<$scope.people.length; i++){
			if($scope.people[i].name===name){
				if($scope.people[i].tasks.indexOf(task)!=-1){
					alert("That task is already on your list");
					$scope.people[i].taskToAdd = '';
				} else{
					$scope.people[i].tasks.push(task);
					$scope.people[i].taskToAdd = '';
				}
			}
		}
	};
	$scope.deleteTask = function(name, task){
		for(var i = 0; i<$scope.people.length; i++){
			if($scope.people[i].name===name){
				return $scope.people[i].tasks.splice(task, 1);
			}
		}
	};
	$scope.editTask = function(name, task){
		for(var i = 0; i<$scope.people.length; i++){
			if($scope.people[i].name===name){
				var taskIndex = $scope.people[i].tasks.indexOf(task);
				$scope.people[i].taskToAdd = task;
				$scope.people[i].tasks.splice(taskIndex, 1);
			}
		}
	};

}]);