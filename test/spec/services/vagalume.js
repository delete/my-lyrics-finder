'use strict';

describe('Service: Vagalume', function () {

  // load the service's module
  beforeEach(module('letrasApp'));

  // instantiate service
  var Vagalume;
  beforeEach(inject(function (_Vagalume_) {
    Vagalume = _Vagalume_;
  }));

  it('should do something', function () {
    expect(!!Vagalume).toBe(true);
  });

});
