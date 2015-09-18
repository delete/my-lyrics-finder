'use strict';

describe('Service: Vagalume', function () {

    // load the service's module
    beforeEach(module('letrasApp'));

    // instantiate service
    var Vagalume;
    beforeEach(inject(function (_Vagalume_) {
        Vagalume = _Vagalume_;
    }));

    it('should return 5 lyrics data from vagalume api', function () {
        var params = {
            'scope': 'all',
            'type': 'mus'
        };

        Vagalume.rank.get(params, function (data) {
            expect(data).not.toBe(null);
            expect(data.all.length).toBe(5);
        });

    });

    it('should return Last Kiss lyrics from pearl jam', function () {
        var params = {
            'art': 'Pearl Jam',
            'mus': 'Last Kiss'
        };

        Vagalume.search.get(params, function (data) {
            expect(data).not.toBe(null);
            expect(data.type).toBe('exact');
            expect(data.art.name).toBe('Pearl Jam');
            expect(data.mus[0].name).toBe('Last Kiss');
        });
    });

});
