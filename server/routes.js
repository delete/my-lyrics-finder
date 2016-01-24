'use strict'
const Lyrics = require('./models/lyrics.js');
module.exports = app => {
  //
  // HOME
  //
  app.get('/', (req, res) => res.json( {status: 'Vagalume API'} ) );

  //
  // LYRICS
  //
  app.get('/lyrics', (req, res) => {
      Lyrics.find((err, lyrics) => {
        if ( err ) console.log(err);
        return res.json(lyrics);
      });
    });
  
  app.post('/lyrics', (req, res) => {
      let lyrics = new Lyrics();
      lyrics.art = req.body.art;
      lyrics.mus = req.body.mus;

      lyrics.save((err) => {
        if (err)
          res.send(err)

        res.json( {message: 'Lyrics created!' } );
      });
    });
    
  app.get('/lyrics/:id', (req, res) => {
    Lyrics.findById(req.params.id, (err, result) => {
      if ( err ) console.log(err)
      
      if ( result ) {
        return res.json(result);
      } else {
        return res.status(404).send('Not found');
      }
    });
  });

  app.delete('/lyrics/:id', (req, res) => {
    Lyrics.remove({
      _id: req.params.id
    },(err, lyrics) => {
      if ( err ) console.log(err);

      res.json( {message: 'Successfully deleted!'} );
    });
  });

};
