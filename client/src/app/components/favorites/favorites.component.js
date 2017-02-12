import templateUrl from './favorites.html';

export const favoritesComponent = {
  templateUrl,
  controller: class FavoritesComponent {
    constructor(VagalumeService, FavoritesService) {
      'ngInject';

      this.vagalumeFavorite = FavoritesService;
      this.vagalume = VagalumeService;
    }

    hasFavorites() {
      return this.vagalumeFavorite.hasFavorites();
    }

    clearFavorites() {
      this.vagalumeFavorite.clearFavorites();
    }

    delFavorite(lyrics) {
      this.vagalumeFavorite.delFavorite(lyrics);  
    }

    showLyrics(lyrics){
      this.vagalume.lyrics = lyrics;
    }

  }
};
