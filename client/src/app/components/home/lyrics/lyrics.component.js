import templateUrl from './lyrics.html';

export const lyricsComponent = {
  bindings: {
    myLyrics: '<',
    onClick: '&'
  },
  templateUrl,
  controller: class LyricsComponent {
    constructor(FavoritesService){
      'ngInject';
      this._FavoritesService = FavoritesService;
    }

    isFavorite(lyrics) {
      return this._FavoritesService.isFavorite(lyrics);
    }

    clickButton(lyrics) {
      this.onClick({
        $event: {
          lyrics: lyrics
        }
      });
    }
  }
};
