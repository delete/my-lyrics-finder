(function(){
'use strict';

angular.module('letrasApp')
  .filter('FormattingText', function () {
    return function (input) {
    	if(input) {
    		input = input.split("\n").join("<br>");
    	}
      return input;
    };
  });
})();