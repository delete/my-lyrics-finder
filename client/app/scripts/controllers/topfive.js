(function() {
'use strict';

angular.module('letrasApp')
	.controller('TopfiveCtrl', TopfiveCtrl);

TopfiveCtrl['$inject'] = ['VagalumeService'];

function TopfiveCtrl(VagalumeService) {
        var vm = this;
		vm.vagalume = VagalumeService;

		var getRank = function () {
			var type = 'mus';
			var scope = 'all';
			vm.vagalume.getRank(scope, type);
		};

		getRank();
};
})();