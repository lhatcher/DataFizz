'use strict';

const sequelize = require('./connection');

const bcrypt = require('bcrypt');

const User = require('./models/user');

module.exports = {

  // GET HANDLERS
  testGet: (req, res) => {
    console.log('endpoint hit!');
    // res.send('Message from the server');
    res.redirect('/login')
  },

  // POST HANDLERS
  testPost: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    console.log(username, password, email);
    res.sendStatus(200);
  },

  createUser: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    User.sync({force: false}).then(() => {

      User.find({ where: {username: username} })
        .then( (user) => {
          if ( user ) {
            res.sendStatus(302);
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              if ( salt ) {
                bcrypt.hash(password, salt, (err, hash) => {
                  if ( hash ) {
                    User.sync().then( () => {
                      return User.create({
                        username: username,
                        password: hash,
                        salt: salt,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                      });
                    });
                    res.sendStatus(200);
                  } else {
                    console.log('ERROR: A problem occurred while hashing password.');
                  }
                });
              } else {
                console.log('ERROR: A problem occurred generating salt.');
              }
            });
          }
        });
    });
  },

};


