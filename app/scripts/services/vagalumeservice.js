'use strict';

/**
 * @ngdoc service
 * @name letrasApp.VagalumeService
 * @description
 * # VagalumeService
 * Service in the letrasApp.
 */
angular.module('letrasApp')
  .service('VagalumeService', function (Vagalume) {
    
    var self = {
    	'data': null,

    	'doSearch': function (artist, music) {
    		if((artist && music)) {
    			
    			var params = {
    				'art': artist,
    				'mus': music
    			};

    			Vagalume.get(params, function (data) {
    				self.data = data;
    			});
    			
    		}

    		return self.data;
    	}
    };


    return self;
  });
