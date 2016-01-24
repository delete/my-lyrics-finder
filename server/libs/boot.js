module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`List on port: ${app.get('port')}`);
  });
};
