import { mockLyrics } from './dataMock';

describe('Component: Favorites page', () => {
  beforeEach(angular.mock.module('components.favorites'));
  
  beforeEach(() => {
    angular.mock.module('components.favorites', ($provide) => {
      $provide.value('VagalumeService', {
        lyrics: mockLyrics
      });
      $provide.value('FavoritesService', {
        hasFavorites: angular.noop,
        clearFavorites: angular.noop,
        delFavorite: angular.noop
      });
    });
  });

  let $componentController;
  let controller;

  beforeEach(inject(($injector) => {
    $componentController = $injector.get('$componentController');
    controller = $componentController('favoritesPage',
      { $scope: {} },
      {}
    );
  }));

  it('DI should be defined', () => {
    let actual = controller.vagalumeFavorite;
    expect(actual).toBeDefined();

    actual = controller.vagalume;
    expect(actual).toBeDefined();
  });

  describe('Controller', () => {
    it('should call vagalumeFavorite.hasFavorites() when hasFavorites() is called', () => { 
      spyOn(controller.vagalumeFavorite, 'hasFavorites');
      controller.hasFavorites();
      
      expect(controller.vagalumeFavorite.hasFavorites).toHaveBeenCalled();
    });

    it('should call vagalumeFavorite.clearFavorites() when clearFavorites() is called', () => { 
      spyOn(controller.vagalumeFavorite, 'clearFavorites');
      controller.clearFavorites();
      
      expect(controller.vagalumeFavorite.clearFavorites).toHaveBeenCalled();
    });

    it('should call vagalumeFavorite.delFavorite() when delFavorite() is called', () => { 
      const event = { lyrics: mockLyrics[0] };
      
      spyOn(controller.vagalumeFavorite, 'delFavorite');
      controller.delFavorite(event);
      
      expect(controller.vagalumeFavorite.delFavorite).toHaveBeenCalledWith(mockLyrics[0]);
    });

    it('should have a lyrics on vagalume.lyrics when showLyrics() is called', () => { 
      const lyrics = mockLyrics[0];
      
      controller.showLyrics(lyrics);
      
      expect(controller.vagalume.lyrics).toEqual(lyrics);
    });
  });
});
