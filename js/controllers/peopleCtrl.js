var peopleApp = angular.module('peopleApp', []);
app.controller('peopleCtrl', ['$scope', function($scope){
	//manager functions
	//people is a list of people that can be assigned tasks
	$scope.people = []; //people starts as an empty array which will contain objects with a name key that will have a single value as a string, and tasks array
	//create a new person
	$scope.createPerson = function(person){
		$scope.nameIsNotInPeople = true;//this assumes the manager is adding new people to the list
		if(!$scope.personToAdd){ //if the manager hasn't inputted a name into the create person form
			alert("Please tell us your name");
		} else{ //otherwise create a new person
			$scope.formattedName = $scope.personToAdd.charAt(0).toUpperCase() + $scope.personToAdd.slice(1).toLowerCase(); //if the user doesn't capitalize the first letter of the name, or has all cap or all lowercase, then the format of that string is changed
			//edgecase: currently does not support first and last names
			for(var i = 0; i<$scope.people.length; i++){ //search through the array of people
				if($scope.people[i].name===$scope.formattedName){ //if that person's name is already in the list of names
					return alert("That person already exists");
				} else{
					$scope.nameIsNotInPeople = false; //otherwise that person's name is not in the array
				}
			} 
			if(!$scope.nameIsInPeople){ //since that new person is not on your list, lets add it
				$scope.people.push({"name": $scope.formattedName, "tasks": []});
			}
			$scope.personToAdd = ''; //reset this data so the manager can add more people
		}
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
				} else if($scope.people[i].taskToAdd===undefined){
					alert('Looks like you forgot to type in a task');
				} else {
					console.log($scope.people[i].taskToAdd);
					// $scope.people[i].tasks.push(task);
					if($scope.manageTasks.indexOf($scope.people[i].taskToAdd)!==-1){
						$scope.manageTasks.splice($scope.people[i].taskToAdd, 1);
						$scope.people[i].tasks.push(task);
					} else{
						alert("You haven't created that task yet");
					}
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
	$scope.manageTasks = [];
	$scope.createNewTask = function(){
		if($scope.manageTasks.indexOf($scope.taskToManage)!==-1){
			alert("That task is already on the list");
			$scope.taskToManage = '';
		} else{
			$scope.manageTasks.push($scope.taskToManage);
			$scope.taskToManage = '';
		}
	};
	$scope.editManagedTask = function(task){
		//console.log($scope.manageTasks); prints the manageTasks array
		//console.log(task);
		$scope.taskToManage = task;
		var manageTaskIndex = $scope.manageTasks.indexOf(task);
		$scope.manageTasks[manageTaskIndex] = '';
		// console.log($scope.manageTasks.indexOf(task));
		// var editingTaskIndex = $scope.manageTasks.indexOf(task);
		// $scope.manageTaskIndex = $scope.manageTasks.indexOf(task);
		// if(task===$scope.manageTasks[editingTaskIndex]){console.log('test')}
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