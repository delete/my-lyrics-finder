import { favAsideComponent } from './fav-aside.component';
import './fav-aside.scss';

export const favAside = angular
  .module('common.aside', [])
  .component('favAside', favAsideComponent)
  .name;
