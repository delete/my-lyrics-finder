'use strict';

/**
* @ngdoc function
* @name letrasApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the letrasApp
*/
angular.module('letrasApp')
	.controller('MainCtrl', function ($scope, VagalumeService, VagalumeFavorite) {

		$scope.search = {};
		$scope.error = false;
		
		$scope.vagalume = VagalumeService;
		$scope.vagalumeFavorite = VagalumeFavorite;

		$scope.addOrDelFavorite = function (lyrics) {
			if ($scope.isFavorite(lyrics)){
				$scope.vagalumeFavorite.delFavorite(lyrics);		
			}else{
				$scope.vagalumeFavorite.addFavorite(lyrics);		
			}
		};
		
		$scope.isFavorite = function (lyrics) {
			return $scope.vagalumeFavorite.isFavorite(lyrics);
		};

		$scope.doSearch = function (){
			$scope.vagalume.doSearch($scope.search.artist, $scope.search.music);

			if ($scope.data) {
				if ($scope.data.type === 'notfound' || $scope.data.type === 'song_notfound') {
					$scope.error = true;
				}
			}
		};
});
