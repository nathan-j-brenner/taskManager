var peopleApp = angular.module('peopleApp', []);
peopleApp.controller('peopleCtrl', ['$scope', function($scope){
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
				return $scope.people[i].tasks.push(task);
			}
		}
	};

}]);