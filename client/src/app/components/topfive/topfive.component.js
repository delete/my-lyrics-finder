export const topfiveComponent = {
  bindings: {
    lyricsOnRank: '<'
  },
  template: `
    <div class="container__flex_column container_center">
      <div class="page">
        <div class="page__title">
            <h2>Top 5 of the day</h2>
        </div>
        <div ng-if="$ctrl.errors">
          {{$ctrl.errorMessage}}
        </div>
        <div style="width:100%;">
          <ul class="list-group favorites_fav" ng-cloak>
            <li class="list-group__item" 
                ng-repeat="music in $ctrl.lyricsOnRank"
                title="{{ music.name }} - {{ music.art.name }}">
              
              <h4 class="list-group__title">
                {{ music.art.name }}
              </h4>
              <span class="list-group__badge">{{ music.views }}</span>
              <img class="list-group__img"
                  ng-src="{{music.art.pic_medium}}">
              <p class="list-group__sub-title">
                {{ music.name }}
              </p>
            </li>
          </ul>
        </div>
      </div>  
    </div>
  `
};
