export function VagalumeService(VagalumeRequestService) {
  'ngInject';

  const self = {

    doSearch: (artist, music) => {
      if ((artist && music)) {

        const params = {
          'art': artist,
          'mus': music
        };

        const mySearch = VagalumeRequestService.search();
        
        return mySearch.get(params, function(data) {
          return data;
        });

      }
    },

    getRank: (scope = 'all', type = 'mus') => {
      if ((scope && type)) {

        const params = {
          'scope': scope,
          'type': type
        };

        const topFiveRank = VagalumeRequestService.rank(5);
        
        return topFiveRank.get(params, (data) => {
          return data;
        });

      }
    }
  };


  return self;
}
