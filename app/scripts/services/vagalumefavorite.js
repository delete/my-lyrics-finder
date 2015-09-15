'use strict';

/**
* @ngdoc service
* @name letrasApp.VagalumeFavorite
* @description
* # VagalumeFavorite
* Service in the letrasApp.
*/
angular.module('letrasApp')
	.service('VagalumeFavorite', function ($localStorage) {
        
        var self = {

	        'storage': $localStorage.$default({
	        	favorites: []
	        }),
	        
			'isFavorite': function (lyrics) {
				if (self.storage.favorites.indexOf(lyrics) !== -1) {
					return true;
				}
				return false;
			},
	        
			'addFavorite': function (lyrics) {
				if (!self.isFavorite(lyrics)) {
					self.storage.favorites.push(lyrics);
				}
			},

			'delFavorite': function (lyrics) {
				if (self.isFavorite(lyrics)) {
					var index = null;
					index = self.storage.favorites.indexOf(lyrics);
					self.storage.favorites.splice(index, 1);
				}
			},
        };

        return self;

});
