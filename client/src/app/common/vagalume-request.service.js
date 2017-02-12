export function VagalumeRequestService($resource) {

  var fac = {};

  fac.search = $resource("http://api.vagalume.com.br/search.php?art=:art&mus=:mus&extra=ytid", {
    art: '@art',
    mus: '@mus'
  });

  fac.rank = $resource("http://api.vagalume.com.br/rank.php?type=:type&period=day&scope=:scope&limit=5", {
    scope: '@scope',
    type: '@type'
  });


  return fac;

}
