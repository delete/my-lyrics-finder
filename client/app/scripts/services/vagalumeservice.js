(function() {
'use strict';

angular.module('letrasApp')
  .service('VagalumeService', function (Vagalume) {
    
    var self = {
        'lyrics': null,
        'rank': null,

    	'doSearch': function (artist, music) {
    		if((artist && music)) {
    			
    			var params = {
    				'art': artist,
    				'mus': music
    			};

    			Vagalume.search.get(params, function (data) {
    				self.lyrics = data;
    			});
    			
    		}
    	},

        'getRank': function (scope, type) {
            if((scope && type)) {
                
                var params = {
                    'scope': scope,
                    'type': type
                };

                Vagalume.rank.get(params, function (data) {
                    self.rank = data;
                });
                
            }
        }
    };


    return self;
  });
})();