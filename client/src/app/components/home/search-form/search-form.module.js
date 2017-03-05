import { searchFormComponent } from './search-form.component';

import './search-form.scss';

export const searchForm = angular
  .module('components.home.searchForm', [])
  .component('searchForm', searchFormComponent)
  .name;
