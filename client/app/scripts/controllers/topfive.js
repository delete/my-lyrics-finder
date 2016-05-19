(function() {
'use strict';

angular.module('letrasApp')
	.controller('TopfiveCtrl', TopfiveCtrl);

TopfiveCtrl['$inject'] = ['$scope', 'VagalumeService'];

function TopfiveCtrl($scope, VagalumeService) {

		$scope.vagalume = VagalumeService;

		var getRank = function () {
			var type = 'mus';
			var scope = 'all';
			$scope.vagalume.getRank(scope, type);
		};

		getRank();
};
})();