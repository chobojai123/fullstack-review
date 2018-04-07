const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');
var Promise = require('bluebird');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    }
  };
  return new Promise(function(resolve, reject){
    request.get(options, function(err, results, body){
    var info = JSON.parse(body);
      if(err){
        reject(err)
      } else {
        resolve(info);
      }
    });
  });
}

module.exports.getReposByUsername = getReposByUsername;