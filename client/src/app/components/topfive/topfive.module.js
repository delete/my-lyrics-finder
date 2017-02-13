import uiRouter from 'angular-ui-router';
import { topfiveComponent } from './topfive.component';

// import './topfive.scss';

export const topfive = angular
  .module('components.topfive', [
    uiRouter
  ])
  .component('topfive', topfiveComponent)
  .config(configRoute)
  .name;

function configRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('topfive', {
      parent: 'app',
      url: '/topfive',
      component: 'topfive'
    });
}