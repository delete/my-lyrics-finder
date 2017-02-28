// import templateUrl from './favorites.html';

export const searchFormComponent = {
  bindings: {
    onClick: '&'
  },
  template: `
      <div class="panel__heading">
        <h3 class="panel__title">
          Find your favorites lyrics
        </h3>
      </div>
      <div class="panel__body">
        <form class="form_inline" name="search_form">
          
          <div>  
            <input ng-model="obj.artist" 
                class="form__input" 
                placeholder="Artist name"
                required></input>
          </div>
          
          <div style="position: relative;">
            <input ng-model="obj.music"
                class="form__input" 
                placeholder="Music name"
                required></input>
          
            <button type="submit" 
                class="btn form__button"
                title="Search" 
                ng-click="$ctrl.clickButton(obj)">
                <i class="material-icons" style="font-size: 2em;">search</i>
          <div>
          </button>
        </form>
      </div>
  `,
  controller: class SearchFormComponent {
    clickButton(lyrics) {
      this.onClick({
        $event: {
          lyrics: lyrics
        }
      });
    }
  }
};
