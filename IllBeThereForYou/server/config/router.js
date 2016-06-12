'use strict';

const handlers = require('./requestHandlers');

module.exports = (app, express) => {
  // GET REQUESTS

  // POST REQUESTS
  app.post('/api/signup', handlers.createUser);
  app.post('/api/login', handlers.login);

  // TOKEN VERIFICATION MIDDLEWARE
  app.use( (req, res, next) => {
    let token = req.body.authToken;

  });
};