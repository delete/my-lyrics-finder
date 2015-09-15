'use strict';

describe('Service: VagalumeFavorite', function () {

  // load the service's module
  beforeEach(module('letrasApp'));

  // instantiate service
  var VagalumeFavorite;
  beforeEach(inject(function (_VagalumeFavorite_) {
    VagalumeFavorite = _VagalumeFavorite_;
  }));

  it('should do something', function () {
    expect(!!VagalumeFavorite).toBe(true);
  });

});
