var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("in controller...");

	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";

		$scope.users = [
		{username:"Mark", lastname:"Otto", datebirthday:"04/05/1988", locked: "true"},
		{username:"Jacob", lastname:"Thornton", datebirthday:"05/02/1990", locked: "false"},
		{username:"Larry", lastname:"The bird", datebirthday:"06/12/1985", locked: "true"}
	];

	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New Candidate Added Successfully";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(){
		$scope.message = "Candidate Update Successfully";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.message = "Candidate Deleted Successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	}
});
