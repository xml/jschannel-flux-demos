var Constants = require('../constants/action-constants');
var Dispatcher = require('../dispatcher/dispatcher');
var ApiUtils = require('../utils/apiUtils');

var APIActions = {
  AllIdeasReceived: function(rawIdeas) {
    Dispatcher.handleApiAction({
      type: Constants.RECEIVED_ALL_IDEAS,
      rawIdeas: rawIdeas
    });
  },
};

module.exports = APIActions;
