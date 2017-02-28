export function FavoritesService($localStorage) {

  const service = {

    storage: $localStorage.$default({
      favorites: []
    }),
    isFavorite: isFavorite,
    lastFive: lastFive,
    addFavorite: addFavorite,
    delFavorite: delFavorite,
    clearFavorites: clearFavorites,
    hasFavorites: hasFavorites,
    total: total
  };

  return service;

  function isFavorite (lyrics) {
    if (lyrics !== null && lyrics.type === 'exact') {
      for (var i = 0; i < total(); i++) {
        if (service.storage.favorites[i].mus[0].id === lyrics.mus[0].id) {
          return true;
        }
      }
      return false;
    }
  }

  function lastFive () {
    var favorites = service.storage.favorites;
    var lastFive = favorites.slice( Math.max(favorites.length - 5, 0) );
    return lastFive;
  }

  function addFavorite (lyrics) {
    if (!isFavorite(lyrics)) {
      service.storage.favorites.unshift(lyrics);
    }
  }

  function delFavorite (lyrics) {
    if (isFavorite(lyrics)) {
      let index = null;
      index = service.storage.favorites.indexOf(lyrics);
      service.storage.favorites.splice(index, 1);
    }
  }

  function clearFavorites () {
    service.storage.$reset({
      favorites: []
    });
  }

  function hasFavorites () {
    return total() > 0;
  }

  function total () {
    return service.storage.favorites.length;
  }

}