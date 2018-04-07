const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true, required: true},
  stargazers_count: Number,
  name: String,
  owner: String,
  description: String,
  html_url: String,
  createdAt: Date,
  updatedAt: Date,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (respository) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for(var i = 0; i < respository.length; i++){
    var githubObj = {};
    githubObj.id = respository[i].id;
    githubObj.name = respository[i].name;
    githubObj.stargazers_count = respository[i].stargazers_count;
    githubObj.owner = respository[i].owner.id;
    githubObj.description = respository[i].description;
    githubObj.html_url = respository[i].html_url;
    githubObj.createdAt = newrespository[i].createdAt;
    githubObj.updatedAt = respository[i].updatedAt;
    
    var repo = new Repo(githubObj);
    
    repo.save(function(err, product){
      console.log(product)});
  };
}

let fetch = (callback) => {
  Repo.find(null, null, {sort: {'stargazers_count': -1}, limit:25})
  .then(function(results){
    callback(results);
  })
  .catch(function(err){
    console.log(err)
  })
}

module.exports.fetch = fetch;
module.exports.save = save;