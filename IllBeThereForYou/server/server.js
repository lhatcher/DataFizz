const express = require('express');
const app = express();
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const sequelize = require('./connection');
sequelize.authenticate().then( (err) => {
    console.log('Connection has been established successfully.');
  }).catch( (err) => {
    console.log('Unable to connect to the database:', err);
  });

const User = require('./models/user');

User.sync({force: true}).then(() => {
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
User.sync({force: true}).then(() => {
  return User.create({
    firstName: 'Dave',
    lastName: 'Smith'
  });
});

require('./router')(app,express);

app.listen(3000, () => {
  console.log('Bookface API server listening on port 3000.');
});




