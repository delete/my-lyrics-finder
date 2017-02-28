import templateUrl from './app-nav.html';

export const navComponent = {
  templateUrl,
  controller: class NavComponent {
    constructor($state){
      this.state = $state;
    }
  }
};
