

module.exports = (app, express) => {
  app.get('/test', (req, res) => {
    console.log('endpoint hit!');
    res.send('Message from the server');
  });
};