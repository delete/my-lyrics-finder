// import templateUrl from './favorites.html';

export const favAsideComponent = {
  bindings: {
    lastFive: '<',
    onClick: '&'
  },
  template: `
    <aside class="aside">
      <div class="aside__title">
        <i class="material-icons aside__icon" style="font-size: 2em;">favorite</i>
        <h3 class="panel-title">
          My last 5 favorites
        </h3>
      </div>
      <div>
        <favorites
          favorite-lyrics="$ctrl.lastFive"
          btn-icon="music_note"
          btn-title="Open this lyrics"
          on-click="$ctrl.clickButton($event)"
          layout-class="favorites_home-page"></favorites>
      </div>
    </aside>
  `,
  controller: class favAsideComponent {
    clickButton(event) {
      this.onClick({
        $event: {
          lyrics: event.lyrics
        }
      });
    }
  }
};
