import uiRouter from 'angular-ui-router';

import { favAside } from './aside/fav-aside.module';
import { lyrics } from './lyrics/lyrics.module';
import { searchForm } from './search-form/search-form.module';

import { homeComponent } from './home.component';
import { favAsideComponent } from './aside/fav-aside.component'

import './home.scss';

export const home = angular
  .module('components.home', [
    uiRouter,
    favAside,
    lyrics,
    searchForm
  ])
  .component('home', homeComponent)
  .config(configRoute)
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