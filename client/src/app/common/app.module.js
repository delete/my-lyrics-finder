import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import 'ngstorage';

import './app.scss';

import { appComponent } from './app.component';

export const app = angular
  .module('common.app', [
    uiRouter,
    ngResource,
    'ngStorage'
  ])
  .component('app', appComponent)
  .config(configRoute)
  .name;
  
function configRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      redirectTo: 'home',
      template: '<app class="app"></app>',
    });
}