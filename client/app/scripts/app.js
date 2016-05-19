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
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'Main'
      })
      .when('/topfive', {
        templateUrl: 'views/topfive.html',
        controller: 'TopfiveCtrl',
        controllerAs: 'TopFive'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl',
        controllerAs: 'Favorites'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
})();