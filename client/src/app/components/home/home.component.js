import templateUrl from './home.html';

export const homeComponent = {
  templateUrl,
  controller: class HomeComponent {
    constructor($scope, VagalumeService, FavoritesService) {
      'ngInject';
      
      this._VagalumeService = VagalumeService;
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
      console.log('aa')
      var vm = this;
      var lyrics = event.lyrics;
      if ( lyrics ) {
        this._VagalumeService.doSearch(lyrics.artist, lyrics.music)
          .$promise.then( data => vm.lyrics = data);
      }
    };

    openLyrics(event){
      this.lyrics = event.lyrics;
    }
  }
};
