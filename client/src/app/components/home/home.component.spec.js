import { lastFiveLyrics } from './dataMock';

describe('Component: Home', () => {
  beforeEach(angular.mock.module('components.home'));

  beforeEach(() => {
    angular.mock.module('components.favorites', ($provide) => {
      $provide.value('VagalumeService', {
        lyrics: lastFiveLyrics,
        search: () => {$promise: {then: angular.noop}}
      });
      $provide.value('FavoritesService', {
        isFavorite: angular.noop,
        lastFive: angular.noop,
        addFavorite: angular.noop,
        delFavorite: angular.noop,
        storage: {
          favorites: []
        }
      });
    });
  });

  describe('Controller', () => {
    let $componentController;
    let controller;
    const mockLastFiveLyrics = lastFiveLyrics.mus.day.all;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('home',
        { $scope: {} },
        {}
      );
    }));

    it('DI should be defined', () => {
      let actual = controller._FavoritesService;
      expect(actual).toBeDefined();

      actual = controller._VagalumeService;
      expect(actual).toBeDefined();
    });

    it('should call _lastFive() on $onInit()', () => {
      spyOn(controller, '_lastFive');
      controller.$onInit();
      
      expect(controller._lastFive).toHaveBeenCalled();
    });

    it('should initiate lyrics as {} on $onInit()', () => {
      controller.$onInit();
      
      expect(controller.lyrics).toBeDefined();
    });

    describe('Functions', () => {
      it('should call _FavoritesService.isFavorite when addOrDelFavorite is called with NO favorite lyrics', () => {
        const event = { lyrics: lastFiveLyrics.mus.day.all[0] };
        
        spyOn(controller._FavoritesService, 'isFavorite').and.returnValue(false);
        spyOn(controller._FavoritesService, 'addFavorite');
        controller.addOrDelFavorite(event);
        
        expect(controller._FavoritesService.isFavorite).toHaveBeenCalledWith(event.lyrics);
        expect(controller._FavoritesService.addFavorite).toHaveBeenCalledWith(event.lyrics);
      });

      it('should call _FavoritesService.delFavorite when addOrDelFavorite is called with 1 favorite lyrics', () => {
        const event = { lyrics: lastFiveLyrics.mus.day.all[0] };

        spyOn(controller._FavoritesService, 'isFavorite').and.returnValue(true);
        spyOn(controller._FavoritesService, 'delFavorite');
        controller.addOrDelFavorite(event);

        expect(controller._FavoritesService.isFavorite).toHaveBeenCalledWith(event.lyrics);
        expect(controller._FavoritesService.delFavorite).toHaveBeenCalledWith(event.lyrics);
      });

      it('should call _lastFive when addOrDelFavorite is called', () => {
        const event = { lyrics: lastFiveLyrics.mus.day.all[0] };
        
        spyOn(controller, '_lastFive');
        controller.addOrDelFavorite(event);
        expect(controller._lastFive).toHaveBeenCalled();
      });

      it('should has a lyrics when openLyrics is called', () => {
        const event = { lyrics: lastFiveLyrics.mus.day.all[0] };
        
        controller.openLyrics(event);
        expect(controller.lyrics).toEqual(event.lyrics);
      });
    });
  });
});