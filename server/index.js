const express = require('express');
let app = express();
const bodyparser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send(req.body);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  var result = req.body;
  getReposByUsername(username);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

