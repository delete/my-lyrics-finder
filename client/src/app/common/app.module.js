import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import 'ngstorage';
import 'font-awesome/scss/font-awesome.scss';

import { appComponent } from './app.component';
import { appNav } from './app-nav/app-nav.module';
import { appFooter } from './app-footer/app-footer.module';
import { VagalumeService } from './vagalume.service.js';
import { VagalumeRequestService } from './vagalume-request.service.js';

export const app = angular
  .module('common.app', [
    uiRouter,
    ngResource,
    'ngStorage',
    appNav,
    appFooter
  ])
  .component('app', appComponent)
  .config(configRoute)
  .service('VagalumeService', VagalumeService)
  .service('VagalumeRequestService', VagalumeRequestService)
  .name;

function configRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      redirectTo: 'home',
      component: 'app',
    });
}