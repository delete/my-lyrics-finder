import { FavoritesService } from './favorites.service';
import { mockLyrics } from './dataMock';

'use strict';

describe('Service: FavoritesService', () => {

  let favoritesService = null;

  const fakeLocalStorage = {
    $default: (objectToSave) => {
      objectToSave.$reset = () => objectToSave.favorites = [];
      return objectToSave;
    }
  }
  
  beforeEach( () => {
    favoritesService = FavoritesService(fakeLocalStorage);
  });

  it('favorites should start empty', () => {
    expect(favoritesService.total()).toBe(0);
  });

  it('should add one lyrics in favorites', () => {
    favoritesService.addFavorite(mockLyrics[0]);
    
    expect(favoritesService.total()).toBe(1);
    expect(favoritesService.hasFavorites()).toBe(true);
  });

  it('lyrics should be favorited', () => {
    favoritesService.addFavorite(mockLyrics[0]);
    favoritesService.addFavorite(mockLyrics[1]);
    
    expect(favoritesService.isFavorite(mockLyrics[1])).toBe(true);
  });

  it('should clear all favorites', () => {
    mockLyrics.map(favoritesService.addFavorite);
    favoritesService.clearFavorites();
    
    expect(favoritesService.hasFavorites()).toBe(false);
    expect(favoritesService.total()).toBe(0);
  });

  it('should exist only onde lyrics in favorites after delete', () => {
    favoritesService.addFavorite(mockLyrics[0]);
    favoritesService.addFavorite(mockLyrics[1]);
    favoritesService.delFavorite(mockLyrics[0]);
    
    expect(favoritesService.total()).toBe(1);
  });
});
