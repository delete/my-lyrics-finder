import { favorites } from './favorites/favorites.module';
import { home } from './home/home.module';
import { topfive } from './topfive/topfive.module';

export const components = angular
  .module('components', [
    home,
    favorites,
    topfive
  ])
  .name;
