'use strict';

const handlers = require('./requestHandlers');

module.exports = (app, express) => {
  // GET REQUESTS
  app.get('/login', (req, res) => {
    res.sendStatus(200);
  });
  app.get('/api/test', handlers.testGet);

  // POST REQUESTS
  app.post('/api/test', handlers.testPost);
  app.post('/api/signup', handlers.createUser);
  app.post('/api/login', handlers.login);
};