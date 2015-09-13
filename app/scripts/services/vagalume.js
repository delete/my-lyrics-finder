'use strict';

/**
* @ngdoc service
* @name letrasApp.Vagalume
* @description
* # Vagalume
* Factory in the letrasApp.
*/
angular.module('letrasApp')
    .factory('Vagalume', function ($resource) {

        return $resource("http://api.vagalume.com.br/search.php?art=:art&mus=:mus&extra=ytid",
        {
            art: '@art',
            mus: '@mus'
        });

});
