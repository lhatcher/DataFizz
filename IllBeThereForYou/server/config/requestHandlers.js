'use strict';
const express = require('express');
const app = express();
const sequelize = require('./mysql_connection');
const secret = require('./config.js').APP_SECRET;

const redisClient = require('./redis_connection');

const jwt = require('jwt-simple');
const moment = require('moment');

const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = {

  // GET HANDLERS
  

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

  login: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.find({ where: {username: username} })
      .then( (user) => {
        if ( user ) {
          bcrypt.compare(password, user.password, (err, success) => {

            if ( success ) {

              let token = jwt.encode({
                iss: user.id,
              }, secret);



              res.json({
                success: true,
                authToken: token,
              });

            } else {
              console.log('ERROR: The password was incorrect. ');
              res.sendStatus(500);
            }
          });
        } else {
          console.log("ERROR: That username does not exist. ");
          res.send('<h3> ERROR: That username does not exist. </h3>');
        }
      })
  },

};





