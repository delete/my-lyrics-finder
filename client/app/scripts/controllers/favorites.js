(function() {
'use strict';

angular.module('letrasApp')
	.controller('FavoritesCtrl', FavoritesCtrl);

FavoritesCtrl['$inject'] = ['$scope', 'VagalumeFavorite', 'VagalumeService'];

function FavoritesCtrl($scope, VagalumeFavorite, VagalumeService) {
		$scope.vagalumeFavorite = VagalumeFavorite;
		$scope.vagalume = VagalumeService;

		$scope.hasFavorites = function () {
			return $scope.vagalumeFavorite.hasFavorites();
		};

		$scope.clearFavorites = function () {
			$scope.vagalumeFavorite.clearFavorites();
		};

		$scope.delFavorite = function (lyrics) {
			$scope.vagalumeFavorite.delFavorite(lyrics);	
		};

		$scope.showLyrics = function (lyrics){
			$scope.vagalume.lyrics = lyrics;
		};

};
})();