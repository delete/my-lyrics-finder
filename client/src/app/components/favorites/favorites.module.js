import uiRouter from 'angular-ui-router';
import { favoritesComponent } from './favorites.component';
import { FavoritesService } from './favorites.service';

export const favorites = angular
  .module('components.favorites', [
    uiRouter
  ])
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
      component: 'favorites'
    });
}
