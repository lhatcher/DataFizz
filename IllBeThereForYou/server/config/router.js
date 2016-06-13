'use strict';

const handlers = require('./requestHandlers');
const utils = require('./utils');

module.exports = (app, express) => {
  // GET REQUESTS
  app.get('/api/test', utils.isAuthenticated, handlers.test);
  app.get('/api/newsfeed', utils.isAuthenticated, handlers.getPosts)

  // POST REQUESTS
  app.post('/api/signup', handlers.createUser);
  app.post('/api/login', handlers.login);
  app.post('/api/logout', handlers.logout);
};