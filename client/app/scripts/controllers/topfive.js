(function() {
'use strict';

angular.module('letrasApp')
	.controller('TopfiveCtrl', function ($scope, VagalumeService) {

		$scope.vagalume = VagalumeService;

		var getRank = function () {
			var type = 'mus';
			var scope = 'all';
			$scope.vagalume.getRank(scope, type);
		};

		getRank();
});
})();