import { favAsideComponent } from './fav-aside.component';
import './fav-aside.scss';

export const favAside = angular
  .module('components.home.aside', [])
  .component('favAside', favAsideComponent)
  .name;
