'use strict';

describe('Service: VagalumeFavorite', function () {

  // load the service's module
  beforeEach(module('letrasApp'));

  // instantiate service
  var VagalumeFavorite;

  var lyrics = {"type":"exact","art":{"id":"3ade68b5ge177eda3","name":"Pearl Jam","url":"http:\/\/www.vagalume.com.br\/pearl-jam\/"},"mus":[{"id":"3ade68b6g3e1eeda3","name":"Black","url":"http:\/\/www.vagalume.com.br\/pearl-jam\/black.html","lang":2,"text":"Sheets of empty canvas,\nUntouched sheets of clay...\nWere laid spread out before me\nAs her body once did.\n\nOh all five horizons\nRevolved around her soul\nAs the earth to the sun\nNow the air I tasted and breathed\nHas taken a turn\n\nOh and all I taught her was everything\nOh, I know she gave me all that she wore\nAnd now my bitter hands chafe beneath the clouds\nOf what was everything?\n\nAll the pictures have\nAll been washed in black,\nTattooed everything\n\nI take a walk outside\nI'm surrounded by some kids at play\nI can feel their laughter so why do I sear?\n\nOh and twisted thoughts that spin 'round my head\nI'm spinning, oh, I'm spinning\nHow quick the sun can drop away\n\nAnd now my bitter hands cradle broken glass\nOf what was everything\nAll the pictures have, all been washed in black,\ntattooed everything...\n\nAll the love gone bad\nTurned my world to black\nTattooed all I see, all that I am and all that I'll be...yeah...\n\nI know someday you'll have a beautiful life,\nI know you'll be a star,\nIn somebody else's sky,\nBut why? why?\nWhy can't it be, oh can't it be mine?","translate":[{"id":"3ade68b7g2ece3ea3","lang":1,"url":"http:\/\/www.vagalume.com.br\/pearl-jam\/black-traducao.html","text":"[Preto] \n\nTelas de pintura vazias\nPe\u00e7as intocadas de argila\nForam dispostas diante de mim\nComo o corpo dela um dia esteve\n\nTodos os cinco horizontes\nGirando ao redor de sua alma\nComo a terra ao redor do sol\nAgora o ar que eu provei e respirei\nMudou de rumo\n\nE tudo o que ensinei a ela foi tudo\nOh, eu sei que ela me deu tudo que ela usava\nE agora minhas m\u00e3os amargas se irrita sob as nuvens\nDo que um dia foi tudo\n\nTodas as imagens foram\nbanhadas todas em preto\nTatuando tudo.\n\nEu saio pra passear\nSou cercado por algumas crian\u00e7as brincando\nEu posso sentir suas risadas, ent\u00e3o porque eu desanimo?\n\nE pensamentos confusos giram ao redor de minha cabe\u00e7a\nEstou girando, oh, estou girando\nT\u00e3o r\u00e1pido quanto o sol pode se p\u00f4r\n\nE agora minhas m\u00e3os amargas embalam cacos de vidro\nDo que um dia foi tudo\nTodas as imagens, foram todas banhadas em preto\nTatuando tudo\n\nTodo o amor tornou-se mal\nTransformou meu mundo em escurid\u00e3o\nTatuando tudo que vejo, tudo que eu sou e tudo que serei\n\nEu sei que algum dia voc\u00ea ter\u00e1 uma linda vida\nEu sei que voc\u00ea ser\u00e1 uma estrela\nNo c\u00e9u de um outro algu\u00e9m\nMas por qu\u00ea? por qu\u00ea?\nPor que n\u00e3o pode ser, por que n\u00e3o pode ser no meu?"}]}],"badwords":false}

  beforeEach(inject(function (_VagalumeFavorite_) {
    VagalumeFavorite = _VagalumeFavorite_;
  }));

  it('favorites should start empty', function () {
    expect(VagalumeFavorite.total()).toBe(0);
  });

  it('should add one lyrics in favorites', function () {
    VagalumeFavorite.addFavorite(lyrics);
    
    expect(VagalumeFavorite.total()).toBe(1);
    expect(VagalumeFavorite.hasFavorites()).toBe(true);
  });

  it('lyrics should be favorited', function () {
    VagalumeFavorite.addFavorite(lyrics);
    
    expect(VagalumeFavorite.isFavorite(lyrics)).toBe(true);
  });

  it('should clear all favorites', function () {
    VagalumeFavorite.addFavorite(lyrics);
    VagalumeFavorite.clearFavorites();
    
    expect(VagalumeFavorite.hasFavorites()).toBe(false);
    expect(VagalumeFavorite.total()).toBe(0);
  });

  it('should exist zero lyrics in favorites', function () {
    VagalumeFavorite.addFavorite(lyrics);
    VagalumeFavorite.delFavorite(lyrics);
    
    expect(VagalumeFavorite.total()).toBe(0);
  });
});
