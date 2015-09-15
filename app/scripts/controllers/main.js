'use strict';

/**
* @ngdoc function
* @name letrasApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the letrasApp
*/
angular.module('letrasApp')
	.controller('MainCtrl', function ($scope, VagalumeService) {

		$scope.search = {};
		$scope.vagalume = VagalumeService;
		$scope.error = false;


		$scope.doSearch = function (){
			$scope.vagalume.doSearch($scope.search.artist, $scope.search.music);

			if ($scope.data) {
				if ($scope.data.type === 'notfound' || $scope.data.type === 'song_notfound') {
					$scope.error = true;
				}
			}
		};
});
