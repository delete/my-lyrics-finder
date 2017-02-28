'use strict';

describe('Service: Vagalume', () => {

    // load the service's module
    beforeEach(module('letrasApp'));

    // instantiate service
    const Vagalume;
    beforeEach(inject((_Vagalume_) => {
        Vagalume = _Vagalume_;
    }));

    it('should return 5 lyrics data from vagalume api', () => {
        const params = {
            'scope': 'all',
            'type': 'mus'
        };

        Vagalume.rank.get(params, (data) => {
            expect(data).not.toBe(null);
            expect(data.all.length).toBe(5);
        });

    });

    it('should return Last Kiss lyrics from pearl jam', () => {
        const params = {
            'art': 'Pearl Jam',
            'mus': 'Last Kiss'
        };

        Vagalume.search.get(params, (data) => {
            expect(data).not.toBe(null);
            expect(data.type).toBe('exact');
            expect(data.art.name).toBe('Pearl Jam');
            expect(data.mus[0].name).toBe('Last Kiss');
        });
    });

});
