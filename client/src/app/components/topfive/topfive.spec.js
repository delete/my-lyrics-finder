import { top5Lyrics } from './dataMock';

describe('Topfive component', () => {
  beforeEach(() => {
    angular.mock.module('components.topfive');
  });

  describe('Controller', () => {
    let $componentController;
    let controller;
    const mockLyrics = top5Lyrics.mus.day.all;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('topfive',
        { $scope: {} },
        { lyricsOnRank: mockLyrics }
      );
    }));

    it('should bind to the correct total of lyrics', () => {
      const expected = top5Lyrics.mus.day.all.length; // 5
      const actual = controller.lyricsOnRank.length;
      
      expect(actual).toEqual(expected);
    });

  });
});