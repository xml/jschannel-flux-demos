var RSVP = require('rsvp');

var APIUtils = {
  validateNewUser: function(credentials) {
    // normally we would make a network call. Instead, we simulate one:
    var response = {
      status: 'accepted',
      name: credentials.name,
      email: credentials.email
    }
    return new RSVP.Promise(function(resolve, reject){
      // simulate async
      window.setTimeout(function() {
        // resolve the promise, just like Axios or $http would
        resolve(response);
      }, 500);
      
    });

  }

};

module.exports= APIUtils;