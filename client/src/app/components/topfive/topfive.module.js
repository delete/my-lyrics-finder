import uiRouter from 'angular-ui-router';

import { app } from '../../common/app.module';

import { topfiveComponent } from './topfive.component';


export const topfive = angular
  .module('components.topfive', [
    uiRouter,
    app
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
        lyricsOnRank: (VagalumeRequestService) => {
          return VagalumeRequestService.rank()
            .$promise.then( data => data.mus.day.all );
        }
      }
    });
}