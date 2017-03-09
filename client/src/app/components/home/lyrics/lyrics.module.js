import { lyricsComponent } from './lyrics.component';
import { FormattingText } from './formatting-text.filter';

import './lyrics.scss';

export const lyrics = angular
  .module('components.home.lyrics', [])
  .component('lyrics', lyricsComponent)
  .filter('FormattingText', FormattingText)
  .name;
