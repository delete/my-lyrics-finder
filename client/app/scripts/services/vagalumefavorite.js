(function(){
'use strict';

angular.module('letrasApp')
	.service('VagalumeFavorite', function ($localStorage) {
        
        var self = {

	        'storage': $localStorage.$default({
	        	favorites: []
	        }),

			'isFavorite': function (lyrics) {
				if(lyrics !== null && lyrics.type === 'exact'){
					for (var i = 0; i < self.total(); i++) {
						if (self.storage.favorites[i].mus[0].id === lyrics.mus[0].id) {
							return true;

						}
				
					}
					return false;
				}
			},

			'lastFive': function () {
				return self.storage.favorites.slice(Math.max(self.storage.favorites.length - 5));
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

			'clearFavorites': function () {
				self.storage.$reset({
      				favorites: []
    			});
			},

			'hasFavorites': function () {
				if (self.total() > 0) {
					return true;
				}else{
					return false;
				}
			},

			'total': function () {
				return self.storage.favorites.length;
			},
        };

        return self;

});
})();