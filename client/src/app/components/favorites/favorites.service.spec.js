import { FavoritesService } from './favorites.service';

'use strict';

describe('Service: FavoritesService', () => {

  let favoritesService = null;

  const lyrics = [
    {
      "type": "exact",
      "art": {
        "id": "3ade68b5ge177ed3213213a3",
        "name": "Pearl Jam",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/"
      },
      "mus": [{
        "id": "3ade68b643456g3e1eeda3",
        "name": "Black",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black.html",
        "lang": 2,
        "text": "",
        "translate": [{
          "id": "3adeadasda68b7g2ece3ea3",
          "lang": 1,
          "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html",
          "text": ""
        }]
      }],
      "badwords": false
    },
    {
      "type": "exact",
      "art": {
        "id": "3ade68b5231344ge177eda3",
        "name": "Pearl Jam",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/"
      },
      "mus": [{
        "id": "3ade68b65454g3e1eeda3",
        "name": "Black",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black.html",
        "lang": 2,
        "text": "",
        "translate": [{
          "id": "3ade68b7g2ecdasdsade3ea3",
          "lang": 1,
          "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html",
          "text": ""
        }]
      }],
      "badwords": false
    },
    {
      "type": "exact",
      "art": {
        "id": "3ade632348b5ge177eda3",
        "name": "Pearl Jam",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/"
      },
      "mus": [{
        "id": "3ade68bawe2e26g3e1eeda3",
        "name": "Black",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black.html",
        "lang": 2,
        "text": "",
        "translate": [{
          "id": "3ade68dawdb7g2ece3ea3",
          "lang": 1,
          "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html",
          "text": ""
        }]
      }],
      "badwords": false
    },
    {
      "type": "exact",
      "art": {
        "id": "3ade6sadsd28b5ge177eda3",
        "name": "Pearl Jam",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/"
      },
      "mus": [{
        "id": "3ade6dsadsgth8b6g3e1eeda3",
        "name": "Black",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black.html",
        "lang": 2,
        "text": "",
        "translate": [{
          "id": "3ade68ghgfhwb7g2ece3ea3",
          "lang": 1,
          "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html",
          "text": ""
        }]
      }],
      "badwords": false
    },
    {
      "type": "exact",
      "art": {
        "id": "3ade68dsase2b5ge177eda3",
        "name": "Pearl Jam",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/"
      },
      "mus": [{
        "id": "3ade68b6ghgfhj3e1eeda3",
        "name": "Black",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black.html",
        "lang": 2,
        "text": "",
        "translate": [{
          "id": "3ade68b7g2ejghjghce3ea3",
          "lang": 1,
          "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html",
          "text": ""
        }]
      }],
      "badwords": false
    },
    {
      "type": "exact",
      "art": {
        "id": "3afggdfgede68b5ge177eda3",
        "name": "Pearl Jam",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/"
      },
      "mus": [{
        "id": "3ade68b6g3e1eehgfhgda3",
        "name": "Black",
        "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black.html",
        "lang": 2,
        "text": "",
        "translate": [{
          "id": "3adsdfdfe68b7g2ece3ea3",
          "lang": 1,
          "url": "http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html",
          "text": ""
        }]
      }],
      "badwords": false
    }
  ];

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
    favoritesService.addFavorite(lyrics[0]);
    
    expect(favoritesService.total()).toBe(1);
    expect(favoritesService.hasFavorites()).toBe(true);
  });

  it('lyrics should be favorited', () => {
    favoritesService.addFavorite(lyrics[0]);
    favoritesService.addFavorite(lyrics[1]);
    
    expect(favoritesService.isFavorite(lyrics[1])).toBe(true);
  });

  it('should clear all favorites', () => {
    lyrics.map(favoritesService.addFavorite);
    favoritesService.clearFavorites();
    
    expect(favoritesService.hasFavorites()).toBe(false);
    expect(favoritesService.total()).toBe(0);
  });

  it('should exist only onde lyrics in favorites after delete', () => {
    favoritesService.addFavorite(lyrics[0]);
    favoritesService.addFavorite(lyrics[1]);
    favoritesService.delFavorite(lyrics[0]);
    
    expect(favoritesService.total()).toBe(1);
  });
});
