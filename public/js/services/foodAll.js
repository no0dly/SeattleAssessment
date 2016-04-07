angular.module('foodService', [])

	// super simple service
	// each function returns a promise object 
	.factory('FoodAll', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/foodAll');
			},
			create : function(foodData) {
				return $http.post('/api/foodAll', foodData);
			},
			delete : function(id) {
				return $http.delete('/api/foodAll/' + id);
			}
		};
	}]);