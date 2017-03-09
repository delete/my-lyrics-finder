'use strict';
import { lyrics, top3Lyrics, top10Lyrics } from './dataMock';

describe('Service: VagalumeRequestService', function () {
  let $rootScope;
  let VagalumeRequestService;
  let $httpBackend;

  beforeEach(angular.mock.module('common.services'));

  beforeEach(inject( ($injector) => {
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    VagalumeRequestService = $injector.get('VagalumeRequestService');
  }));

  it('Scope should be defined', () => {
    expect($rootScope).toBeDefined();
  });

  it('Service should be defined', () => {
    expect(VagalumeRequestService).toBeDefined();
  });

  it('httpBackend should be defined', () => {
    expect($httpBackend).toBeDefined();
  });

  describe('Search method', () => {
    it('The seach should return the right lyrics', () => {
      const artist = 'PearlJam';
      const music = 'Black';
      const respond = lyrics;        
      const result = search(artist, music, respond);

      expect(result.art.id).toEqual(lyrics.art.id);
    });

    it('The seach should return notfound when artist does not exist', () => {
      const artist = 'PearlJamaaaaa';
      const music = 'Black';
      const expected = 'notfound';
      const respond = '{"type":"notfound"}';
      const result = search(artist, music, respond);

      expect(result.type).toEqual(expected);
    });

    it('The seach should return song_notfound when music does not exist', () => {
      const artist = 'PearlJam';
      const music = 'Blackaaaaa';
      const expected = 'song_notfound';
      const respond = '{"type":"song_notfound","art":{"id":"","name":"Pearl Jam","url":""}}';
      const result = search(artist, music, respond);

      expect(result.type).toEqual(expected);
    });

    const search = (artist, music, respond) => {
      let expectedUrl = `http://api.vagalume.com.br/search.php?art=${artist}&mus=${music}&extra=ytid`;
      
      $httpBackend.expectGET(expectedUrl)
        .respond(respond);

      const result = VagalumeRequestService.search(artist, music);
      
      $httpBackend.flush();

      return result;
    }
  });

  describe('Rank method', () => {
    it('Rank should return 3 top lyrics', () => {
      const limit = 3;    
      const expected = 3;
      const result = getRank(limit, top3Lyrics);

      expect(result.mus.day.all.length).toEqual(expected);
    });

    it('Rank should return 10 top lyrics when 0 was given as limit', () => {
      const limit = 0;
      const expected = 10;
      const result = getRank(limit, top10Lyrics);

      expect(result.mus.day.all.length).toEqual(expected);
    });

    const getRank = (limit, respond) => {
      let period = 'day';
      let expectedUrl = `http://api.vagalume.com.br/rank.php?type=mus&period=${period}&scope=all&limit=${limit}`;
      
      $httpBackend.expectGET(expectedUrl).respond(respond);

      const result = VagalumeRequestService.rank(limit, 'day');
      
      $httpBackend.flush();

      return result;
    }
  });
});
