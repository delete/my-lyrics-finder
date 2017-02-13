// import templateUrl from './favorites.html';

export const favoritesComponent = {
  bindings: {
    favoriteLyrics: '<',
    onClick: '&'
  },
  template: `
    <ul class="list-group">
      <li class="list-group__item card"
            ng-repeat="lyric in $ctrl.favoriteLyrics"
            title="{{ lyric.mus[0].name }} - {{ lyric.art.name }}">
          <div class="card__left">
            <p class="list-group__title card__title">
              {{ lyric.mus[0].name }}
            </p>
            <p class="list-group__sub-title card__sub-title">{{ lyric.art.name }}</p>
          </div>
          <div class="card__right">
            <button type="button" 
                class="btn card__btn-remove"
                title="Remove {{ lyric.mus[0].name }}" 
                ng-click="$ctrl.delFavorite(lyric)">
              <i class="material-icons card__remove-icon">delete</i>
            </button>
          </div>
      </li>
    </ul>
  `,
  controller: class FavoritesComponent {
    delFavorite(lyricsToRemove) {
      this.onClick({
        $event: {
          lyrics: lyricsToRemove
        }
      });
    }
  }
};
