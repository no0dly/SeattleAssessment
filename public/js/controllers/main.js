angular.module('foodController', [])

	// inject the food service factory into our controller
	.controller('mainController', ['$scope','$http','FoodAll', function($scope, $http, FoodAll) {
		$scope.formData = {};
		$scope.loading = true;
		// GET =====================================================================
		// when landing on the page, get all food and show them
		// use the service to get all the food
		FoodAll.get()
			.success(function(data) {
				$scope.foodAll = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createFood = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.foodName != undefined && $scope.formData.price != undefined ) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				FoodAll.create($scope.formData)

					// if successful creation, call our get function to get all the new food
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.foodAll = data; // assign our new list of food
					});
			}
		};

		// DELETE ==================================================================
		// delete a food after checking it
		$scope.deleteFood = function(id) {
			$scope.loading = true;

			FoodAll.delete(id)
				// if successful creation, call our get function to get all the new food
				.success(function(data) {
					$scope.loading = false;
					$scope.foodAll = data; // assign our new list of food
				});
		};

		$scope.total = function() {
			$scope.loading = true;
			FoodAll.get()
				.success(function(data) {
					$scope.loading = true;
					console.log(data);
				});
		};

	}]);