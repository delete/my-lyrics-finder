import { lastFiveLyrics } from '../dataMock';

describe('Topfive component', () => {
  beforeEach(() => {
    angular.mock.module('components.home.aside');
  });

  describe('Controller', () => {
    let $componentController;
    let controller;
    const mockLastFiveLyrics = lastFiveLyrics.mus.day.all;
    const mockClick = angular.noop;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('favAside',
        { $scope: {} },
        { lastFive: mockLastFiveLyrics,  onClick: mockClick}
      );
    }));

    it('should bind to the correct total of lyrics', () => {
      const expected = lastFiveLyrics.mus.day.all.length; // 5
      const actual = controller.lastFive.length;
      
      expect(actual).toEqual(5);
    });

    it('should call onClick with the correct payload', () => {
      const payload = { $event: { lyrics: lastFiveLyrics.mus.day.all[0] } };
      const event = { lyrics: lastFiveLyrics.mus.day.all[0] };

      spyOn(controller, 'onClick');
      controller.clickButton(event);
      expect(controller.onClick).toHaveBeenCalledWith(payload);
    });
  });
});