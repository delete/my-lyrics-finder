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
        return res.json( {lyrics: lyrics} );
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
    
//  app.route('/lyrics/:id')
//    .all((req, res, next) => {
//      // Middleware to execute before the routes
//      delete req.body.id;
//      next();
//    })
//    .get((req, res) => {
//    })
//    .post((req, res) => {
//    });
};
