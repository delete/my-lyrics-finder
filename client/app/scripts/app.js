(function(){
'use strict';

angular
  .module('letrasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/topfive', {
        templateUrl: 'views/topfive.html',
        controller: 'TopfiveCtrl',
        controllerAs: 'topfive'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl',
        controllerAs: 'favorites'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();