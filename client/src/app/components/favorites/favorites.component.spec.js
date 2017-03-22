import { mockLyrics } from './dataMock';

describe('Component: Favorites', () => {

  beforeEach(angular.mock.module('components.favorites'));

  let $componentController;
  let controller;
  const mockClick = angular.noop;
  const mockIcon = 'delete';
  const mockTitle = 'Remove this lyrics from favorites';
  const mockClass = 'favorites_fav';

  beforeEach(inject(($injector) => {
    $componentController = $injector.get('$componentController');
    controller = $componentController('favorites',
      { $scope: {} },
      { 
        favoriteLyrics: mockLyrics,
        onClick: mockClick, 
        btnIcon: mockIcon, 
        btnTitle: mockTitle, 
        layoutClass: mockClass
      }
    );
  }));

  it('should bind to the correct total of 6 lyrics', () => {
    const expected = mockLyrics.length; // 6
    const actual = controller.favoriteLyrics.length;
    
    expect(actual).toEqual(expected);
  });

  it('should call onClick when clickButton is called', () => {
    const payload = { $event: { lyrics: mockLyrics[0] } };
    
    spyOn(controller, 'onClick');
    controller.clickButton(mockLyrics[0]);
    
    expect(controller.onClick).toHaveBeenCalledWith(payload);
  });

  it('should bind to the correct icon button', () => {
    const expected = mockIcon;
    const actual = controller.btnIcon;
    
    expect(actual).toEqual(expected);
  });

  it('should bind to the correct title button', () => {
    const expected = mockTitle;
    const actual = controller.btnTitle;
    
    expect(actual).toEqual(expected);
  });

  it('should bind to the correct layout class', () => {
    const expected = mockClass;
    const actual = controller.layoutClass;
    
    expect(actual).toEqual(expected);
  });
});
