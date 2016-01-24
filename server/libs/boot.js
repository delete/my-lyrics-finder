module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`Liston on port: ${app.get('port')}`);
  });
};
