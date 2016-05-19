(function() {
'use strict';

angular.module('letrasApp')
	.controller('FavoritesCtrl', FavoritesCtrl);

FavoritesCtrl['$inject'] = ['VagalumeFavorite', 'VagalumeService'];

function FavoritesCtrl(VagalumeFavorite, VagalumeService) {
		var vm = this;
		vm.vagalumeFavorite = VagalumeFavorite;
		vm.vagalume = VagalumeService;

		vm.hasFavorites = function () {
			return vm.vagalumeFavorite.hasFavorites();
		};

		vm.clearFavorites = function () {
			vm.vagalumeFavorite.clearFavorites();
		};

		vm.delFavorite = function (lyrics) {
			vm.vagalumeFavorite.delFavorite(lyrics);	
		};

		vm.showLyrics = function (lyrics){
			vm.vagalume.lyrics = lyrics;
		};
};
})();