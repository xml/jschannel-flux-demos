var Constants = require('../constants/action-constants');
var Dispatcher = require('../dispatcher/dispatcher');
var ApiUtils = require('../utils/apiUtils');

var ViewActions = {
  SignupNewUser: function(credentials) {
    ApiUtils.validateNewUser(credentials).then(function(response) {
      var validatedCredentials = {
        name: response.name,
        email: response.email
      };

      Dispatcher.handleApiAction({
        type: Constants.NEW_USER_REGISTERED,
        credentials: validatedCredentials
      });
    });
    // ... we'd need an error-handler if we weren't mocking this. :-) 
  },
  JoinCurrentUserToIdea: function(ideaIndex) {
    Dispatcher.handleViewAction({
        type: Constants.USER_JOINS_IDEA,
        ideaIndex: ideaIndex,
    });
  },
  CurrentUserLeavesIdea: function(ideaIndex) {
    Dispatcher.handleViewAction({
        type: Constants.USER_LEAVES_IDEA
    });
  }
};

module.exports = ViewActions;
