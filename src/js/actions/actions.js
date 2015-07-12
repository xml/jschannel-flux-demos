var Constants = require('../constants/action-constants');
var Dispatcher = require('../dispatcher/dispatcher');
var ApiUtils = require('../utils/apiUtils');

var Actions = {
  SignupNewUser: function(credentials) {
    ApiUtils.validateNewUser(credentials).then(function(response) {
      var validatedCredentials = {
        name: response.name,
        email: response.email
      };

      console.log("action validated: ", response);
      Dispatcher.handleApiAction({
        type: Constants.NEW_USER_REGISTERED,
        credentials: validatedCredentials
      });
    });
    // ... we'd need an error-handler if we weren't mocking this. :-) 

  },



}

module.exports = Actions;
