import uiRouter from 'angular-ui-router';
import 'ngstorage';

import { common } from '../../common/common.module';

import { favoritesPageComponent } from './favorites-page.component';
import { favoritesComponent } from './favorites.component';
import { FavoritesService } from './favorites.service';

import './favorites.scss';

export const favorites = angular
  .module('components.favorites', [
    uiRouter,
    'ngStorage',
    common // use VagalumeService
  ])
  .component('favoritesPage', favoritesPageComponent)
  .component('favorites', favoritesComponent)
  .config(configRoute)
  .service('FavoritesService', FavoritesService)
  .name;


function configRoute($stateProvider){
  'ngInject';

  $stateProvider
    .state('favorites', {
      parent: 'app',
      url: '/favorites',
      component: 'favoritesPage'
    });
}
