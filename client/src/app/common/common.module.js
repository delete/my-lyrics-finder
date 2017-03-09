import { app } from './app.module';

import { appNav } from './app-nav/app-nav.module';
import { appFooter } from './app-footer/app-footer.module';
import { services } from './services/services.module';


export const common = angular
  .module('common', [
    app,
    appNav,
    appFooter,
    services
  ])
  .name;
