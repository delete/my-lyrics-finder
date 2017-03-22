import templateUrl from './home.html';

export const homeComponent = {
  templateUrl,
  controller: class HomeComponent {
    constructor($scope, VagalumeRequestService, FavoritesService) {
      'ngInject';
      
      this._VagalumeService = VagalumeRequestService;
      this._FavoritesService = FavoritesService;

      this.$onInit = () => {
        this.lyrics = {};
        this._lastFive();
      }
    }

    addOrDelFavorite(event) {
      var lyrics = event.lyrics;

      if (this._FavoritesService.isFavorite(lyrics)){
        this._FavoritesService.delFavorite(lyrics);
      }else{
        this._FavoritesService.addFavorite(lyrics);
      }
      // Update favorite array
      this._lastFive()
    };
    
    _lastFive() {
      this.lastFive = this._FavoritesService.lastFive();
    }

    doSearch(event){
      var vm = this;
      var lyrics = event.lyrics;
      if ( lyrics ) {
        this._VagalumeService.search(lyrics.artist, lyrics.music)
                              .$promise.then( data => vm.lyrics = data);
      }
    };

    openLyrics(event){
      this.lyrics = event.lyrics;
    }
  }
};
