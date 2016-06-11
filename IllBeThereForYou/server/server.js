const express = require('express');
const app = express();

const sequelize = require('./connection');

const User = require('./models/user');

User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

sequelize.authenticate().then( (err) => {
    console.log('Connection has been established successfully.');
  }).catch( (err) => {
    console.log('Unable to connect to the database:', err);
  });


app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/test', (req, res) => {
  console.log('endpoint hit!');
  res.send('Message from server');
});

app.listen(3000, () => {
  console.log('Bookface API server listening on port 3000.');
});

// const Article = connection.define({
//   title: Sequelize.STRING,
//   body: Sequelize.TEXT,
// });













