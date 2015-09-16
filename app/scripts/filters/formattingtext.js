'use strict';

/**
 * @ngdoc filter
 * @name letrasApp.filter:FormattingText
 * @function
 * @description
 * # FormattingText
 * Filter in the letrasApp.
 */
angular.module('letrasApp')
  .filter('FormattingText', function () {
    return function (input) {
    	if(input) {
    		input = input.split("\n").join("<br>");
    	}
      return input;
    };
  });
