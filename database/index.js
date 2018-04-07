const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require("bluebird");

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true, required: true},
  stargazers_count: Number,
  name: String,
  owner: String,
  description: String,
  html_url: String,
  created_at: Date,
  updated_at: Date,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (respository) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  return new Promise(function(resolve, reject){
    for(var i = 0; i < respository.length; i++){
      var githubObj = {};
      githubObj.id = respository[i].id;
      githubObj.name = respository[i].name;
      githubObj.stargazers_count = respository[i].stargazers_count;
      githubObj.owner = respository[i].owner.id;
      githubObj.description = respository[i].description;
      githubObj.html_url = respository[i].html_url;
      githubObj.created_at = respository[i].created_at;
      githubObj.updated_at = respository[i].updated_at;
      
      var repo = new Repo(githubObj);
      repo.save(function(err, response){
        if(err){
          reject(err)
        } else {
          resolve(response);
        }
      });
    };
  })
}

let fetch = () => {
  return new Promise(function(resolve, reject){ 
    Repo.find(null, null, {sort: {'stargazers_count': -1}, limit:25})
    .then(function(results){
      resolve(results);
    })
    .catch(function(err){
      reject(err)
    })
  });
}

module.exports.fetch = fetch;
module.exports.save = save;