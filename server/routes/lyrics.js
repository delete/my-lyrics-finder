module.exports = app => {
  const Lyrics = app.models.lyrics;

  app.get('/lyrics', (req, res) => {
    Lyrics.findAll({}, (lyrics) => {
      res.json( {lyrics: lyrics} );
    });
  });
};
