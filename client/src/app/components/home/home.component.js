import templateUrl from './home.html';

export const homeComponent = {
  templateUrl,
  controller: class HomeComponent {
    constructor(VagalumeService, FavoritesService) {
      'ngInject';

      this.search = {};
      this.error = false;
    
      this.vagalume = VagalumeService;
      this.vagalumeFavorite = FavoritesService;
    }

    addOrDelFavorite(lyrics) {
      if (this.isFavorite(lyrics)){
        this.vagalumeFavorite.delFavorite(lyrics);    
      }else{
        this.vagalumeFavorite.addFavorite(lyrics);    
      }
    };
    
    isFavorite(lyrics) {
      return this.vagalumeFavorite.isFavorite(lyrics);
    };

    doSearch(){
      this.vagalume.doSearch(this.search.artist, this.search.music);
    };
  }
};
