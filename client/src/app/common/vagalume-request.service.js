export function VagalumeRequestService($resource) {
  'ngInject';

  const mainUrl = 'http://api.vagalume.com.br/';

  const service = {
    search: search,
    rank: rank
  };  
  
  return service;


  function search () {
    return $resource(
      `${mainUrl}search.php?art=:art&mus=:mus&extra=ytid`,
      {
        art: '@art',
        mus: '@mus'
      }
    );
  }

  function rank (limit = 5, period = 'day') {
    return $resource(
      `${mainUrl}rank.php?type=:type&period=${period}&scope=:scope&limit=${limit}`,
      {
        scope: '@scope',
        type: '@type'
      }
    );
  }

}
