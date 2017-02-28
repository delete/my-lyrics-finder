import { searchFormComponent } from './search-form.component';

import './search-form.scss';

export const searchForm = angular
  .module('common.searchForm', [])
  .component('searchForm', searchFormComponent)
  .name;
