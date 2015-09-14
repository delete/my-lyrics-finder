'use strict';

/**
* @ngdoc function
* @name letrasApp.controller:TopfiveCtrl
* @description
* # TopfiveCtrl
* Controller of the letrasApp
*/
angular.module('letrasApp')
	.controller('TopfiveCtrl', function ($scope, VagalumeService) {

		$scope.data = null;


		var getRank = function () {
			var type = 'mus';
			var scope = 'all';
			$scope.data = VagalumeService.getRank(scope, type);
		};

		getRank();
});
