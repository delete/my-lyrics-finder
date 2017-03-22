describe('Component: Search form', () => {
  beforeEach(() => {
    angular.mock.module('components.home.searchForm');
  });

  describe('Controller', () => {
    let $componentController;
    let controller;
    const mockClick = angular.noop;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('searchForm',
        { $scope: {} },
        { onClick: mockClick}
      );
    }));

    it('should call onClick with the correct payload', () => {
      const mockLyrics = {artist: 'Pearl Jam', music: 'Alive'};
      const payload = { $event: { lyrics: mockLyrics } };

      spyOn(controller, 'onClick');
      controller.clickButton(mockLyrics);
      expect(controller.onClick).toHaveBeenCalledWith(payload);
    });
  });
});