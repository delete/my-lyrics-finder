import { app } from './app.module';

import { appNav } from './app-nav/app-nav.module';
import { appFooter } from './app-footer/app-footer.module';
import { VagalumeService } from './vagalume.service.js';
import { VagalumeRequestService } from './vagalume-request.service.js';


export const common = angular
  .module('common', [
    app,
    appNav,
    appFooter
  ])
  .service('VagalumeService', VagalumeService)
  .service('VagalumeRequestService', VagalumeRequestService)
  .name;
