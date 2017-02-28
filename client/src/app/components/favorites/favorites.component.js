// import templateUrl from './favorites.html';

export const favoritesComponent = {
  bindings: {
    favoriteLyrics: '<',
    onClick: '&',
    btnIcon: '@',
    btnTitle: '@',
    layoutClass: '@'
  },
  template: `
    <ul class="list-group {{ $ctrl.layoutClass }}">
      <li class="list-group__item card"
            ng-repeat="lyric in $ctrl.favoriteLyrics"
            title="{{ lyric.mus[0].name }} - {{ lyric.art.name }}"
            ng-show="$ctrl.favoriteLyrics.length > 0">
          <div class="card__left">
            <p class="list-group__title card__title">
              {{ lyric.mus[0].name }}
            </p>
            <p class="list-group__sub-title card__sub-title">{{ lyric.art.name }}</p>
          </div>
          <div class="card__right">
            <button type="button" 
                class="btn card__button"
                title="{{ $ctrl.btnTitle }}" 
                ng-click="$ctrl.clickButton(lyric)">
              <i class="material-icons card__icon">{{ $ctrl.btnIcon }}</i>
            </button>
          </div>
      </li>
      <div class="empty" ng-show="$ctrl.favoriteLyrics.length == 0">
        <i class="material-icons empty__icon" style="font-size: 4em;">mood_bad</i>
        <p class="empty__text"> You favorites is empty.</p>
      </div>
    </ul>
  `,
  controller: class FavoritesComponent {
    clickButton(lyrics) {
      this.onClick({
        $event: {
          lyrics: lyrics
        }
      });
    }
  }
};
