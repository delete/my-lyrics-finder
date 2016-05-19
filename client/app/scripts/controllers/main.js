(function() {
'use strict';

angular.module('letrasApp')
	.controller('MainCtrl', MainCtrl);

MainCtrl['$inject'] = ['VagalumeService', 'VagalumeFavorite']

function MainCtrl(VagalumeService, VagalumeFavorite) {
		var vm = this;
		vm.search = {};
		vm.error = false;
		
		vm.vagalume = VagalumeService;
		vm.vagalumeFavorite = VagalumeFavorite;

		vm.addOrDelFavorite = function (lyrics) {
			if (vm.isFavorite(lyrics)){
				vm.vagalumeFavorite.delFavorite(lyrics);		
			}else{
				vm.vagalumeFavorite.addFavorite(lyrics);		
			}
		};
		
		vm.isFavorite = function (lyrics) {
			return vm.vagalumeFavorite.isFavorite(lyrics);
		};

		vm.doSearch = function (){
			vm.vagalume.doSearch(vm.search.artist, vm.search.music);
		};
};
})();