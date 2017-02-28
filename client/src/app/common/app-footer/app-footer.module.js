import { footerComponent } from './app-footer.component';
import './app-footer.scss';

export const appFooter = angular
  .module('common.app-footer', [])
  .component('appFooter', footerComponent)
  .name;
