export function VagalumeRequestService($resource) {
  'ngInject';

  const mainUrl = 'http://api.vagalume.com.br/';

  const service = {
    search: search,
    rank: rank
  };  
  
  return service;


  function search (artist, music) {
    const params = {
      'art': artist,
      'mus': music
    };
    return $resource(
      `${mainUrl}search.php?art=:art&mus=:mus&extra=ytid`,
      {
        art: '@art',
        mus: '@mus'
      }
    ).get(params, function(data) {
      return data;
    });
  }

  function rank (limit = 5, period = 'day') {
    const params = {
      'scope': 'all',
      'type': 'mus',
      'period': period,
      'limit': limit
    };
    return $resource(
      `${mainUrl}rank.php?type=:type&period=:period&scope=:scope&limit=:limit`,
      {
        scope: '@scope',
        type: '@type',
        period: '@period',
        limit: '@limit'
      }
    ).get(params, (data) => {
      return data;
    });
  }

}
