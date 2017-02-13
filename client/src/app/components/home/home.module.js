import uiRouter from 'angular-ui-router';

import { homeComponent } from './home.component';
import { FormattingText } from './formatting-text.filter';

import './home.scss';

export const home = angular
  .module('components.home', [
    uiRouter
  ])
  .component('home', homeComponent)
  .config(configRoute)
  .filter('FormattingText', FormattingText)
  .name;

function configRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      parent: 'app',
      url: '/',
      component: 'home'
    });
}