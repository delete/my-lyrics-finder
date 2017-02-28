import uiRouter from 'angular-ui-router';
import { topfiveComponent } from './topfive.component';


export const topfive = angular
  .module('components.topfive', [
    uiRouter,
    'common.app'
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
      component: 'topfive',
      resolve: {
        lyricsOnRank: (VagalumeService) => {
          const type = 'mus',
                scope = 'all';
          return VagalumeService.getRank(scope, type)
            .$promise.then( data => data.mus.day.all );
        }
      }
    });
}