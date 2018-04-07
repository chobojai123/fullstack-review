const express = require('express');
const bodyparser = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();
app.use(bodyparser.text());
// app.use(bodyparser.urlencoded());
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var user = req.body;
  console.log(user);
  github.getReposByUsername(user, function(err, response){
    if(err){
      res.writeHead(400,{'Content-Type': 'text/plain'});
      res.end(err.toString());
    } else {
      db.save(response);
      res.end('hi');
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

