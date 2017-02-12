import templateUrl from './topfive.html';

export const topfiveComponent = {
  templateUrl,
  controller: class TopfiveComponent {
    constructor(VagalumeService) {
      'ngInject';
      this.vagalume = VagalumeService;
    }
    
    $onInit() {
      this.getRank();
    }
    
    getRank() {
      var type = 'mus';
      var scope = 'all';
      this.vagalume.getRank(scope, type);
    }
  }
};
