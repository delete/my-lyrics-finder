export function VagalumeService(VagalumeRequestService) {

  var self = {
    'lyrics': null,
    'rank': null,

    'doSearch': function(artist, music) {
      if ((artist && music)) {

        var params = {
          'art': artist,
          'mus': music
        };

        VagalumeRequestService.search.get(params, function(data) {
          self.lyrics = data;
        });

      }
    },

    'getRank': function(scope, type) {
      if ((scope && type)) {

        var params = {
          'scope': scope,
          'type': type
        };

        VagalumeRequestService.rank.get(params, function(data) {
          self.rank = data;
        });

      }
    }
  };


  return self;
}
