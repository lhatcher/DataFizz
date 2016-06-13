'use strict';
const express = require('express');
const app = express();
const sequelize = require('./mysql_connection');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const utils = require('./utils');

module.exports = {
  // GET HANDLERS
  test: (req, res) => {
    console.log('Authentication System is working!');
    res.send('Success!!!');
  },  

  getPosts: (req, res) => {
    res.json({success: true});
  },

  // POST HANDLERS
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
            console.log('ERROR: That username is already in the database.');
            res.json({
              success: false,
              message: 'That user name is already in the database.',
            });
            res.sendStatus(401);
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              if ( salt ) {
                bcrypt.hash(password, salt, (err, hash) => {
                  if ( hash ) {
                    User.sync().then( () => {
                      return User.create({
                        username: username,
                        password: hash,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                      });
                    });
                    let token = utils.createToken(user);
                    utils.startSession(user, token);

                    res.json({
                      success: true,
                      authToken: token,
                    });
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

  login: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.find({ where: {username: username} })
      .then( (user) => {
        if ( user ) {
          bcrypt.compare(password, user.password, (err, success) => {
            if ( success ) {
              let token = utils.createToken(user);
              utils.startSession(user, token);

              res.json({
                success: true,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                authToken: token,
              });
            } else {
              console.log('ERROR: The password was incorrect. ');
              res.sendStatus(401);
            }
          });
        } else {
          console.log("ERROR: That username does not exist. ");
          res.send('<h3> ERROR: That username does not exist. </h3>');
        }
      });
  },

  logout: (req, res) => {
    let username = req.body.username;
    utils.destroySession(username);
    res.json({success: true});
  },
};






