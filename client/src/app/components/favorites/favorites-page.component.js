import templateUrl from './favorites-page.html';

export const favoritesPageComponent = {
  templateUrl,
  controller: class FavoritesPageComponent {
    constructor(VagalumeRequestService, FavoritesService) {
      'ngInject';

      this.vagalumeFavorite = FavoritesService;
      this.vagalume = VagalumeRequestService;
    }

    hasFavorites() {
      return this.vagalumeFavorite.hasFavorites();
    }

    clearFavorites() {
      this.vagalumeFavorite.clearFavorites();
    }

    delFavorite(event) {
      this.vagalumeFavorite.delFavorite(event.lyrics);
    }

    showLyrics(lyrics){
      this.vagalume.lyrics = lyrics;
    }

  }
};
