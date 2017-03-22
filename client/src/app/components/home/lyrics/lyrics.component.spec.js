import { lastFiveLyrics } from '../dataMock';

describe('Component: Lyrics', () => {
  beforeEach(angular.mock.module('components.home.lyrics'));

  beforeEach(() => {
    angular.mock.module('components.favorites', ($provide) => {
      $provide.value('FavoritesService', {
        isFavorite: angular.noop
      });
    });
  });

  describe('Controller', () => {
    let $componentController;
    let controller;
    const mockLyrics = lastFiveLyrics.mus.day.all[0];
    const mockClick = angular.noop;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('lyrics',
        { $scope: {} },
        { myLyrics: mockLyrics,  onClick: mockClick}
      );
    }));

    it('DI should be defined', () => {    
      expect(controller._FavoritesService).toBeDefined();
    });

    describe('Controller', () => {
      it('should bind to the correct lyrics', () => {
        const expected = mockLyrics; // 5
        const actual = controller.myLyrics;
        
        expect(actual).toEqual(expected);
      });

      it('should call onClick with the correct payload', () => {
        const payload = { $event: { lyrics: mockLyrics } };
        const event = mockLyrics;

        spyOn(controller, 'onClick');
        controller.clickButton(event);
        expect(controller.onClick).toHaveBeenCalledWith(payload);
      });

      it('should call _FavoritesService.isFavorite with the correct payload when isFavorite is called', () => {
        const payload = mockLyrics;

        spyOn(controller._FavoritesService, 'isFavorite');
        controller.isFavorite(payload);
        expect(controller._FavoritesService.isFavorite).toHaveBeenCalledWith(payload);
      });
    });
  });
});