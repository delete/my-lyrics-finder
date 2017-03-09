import ngResource from 'angular-resource';

import { VagalumeRequestService } from './vagalume-request.service.js';


export const services = angular
  .module('common.services', [
    ngResource
  ])
  .service('VagalumeRequestService', VagalumeRequestService)
  .name;
