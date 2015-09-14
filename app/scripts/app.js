'use strict';

/**
 * @ngdoc overview
 * @name letrasApp
 * @description
 * # letrasApp
 *
 * Main module of the application.
 */
angular
  .module('letrasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed'
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
      .otherwise({
        redirectTo: '/'
      });
  });
