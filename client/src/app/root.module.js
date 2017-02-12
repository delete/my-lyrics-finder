import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { rootComponent } from './root.component';
import { common } from './common/common.module';
import { components } from './components/components.module';

import './root.scss';


export const root = angular
  .module('root', [
    uiRouter,
    common,
    components
  ])
  .component('root', rootComponent)
  .config(configRoute)
  .name;

function configRoute($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');
}