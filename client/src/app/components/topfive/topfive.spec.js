'use strict';

describe('Controller: TopfiveCtrl', function () {

  // load the controller's module
  beforeEach(module('letrasApp'));

  var TopfiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopfiveCtrl = $controller('TopfiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
