var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var Dispatcher = require('../dispatcher/dispatcher');
var ActionConstants = require('../constants/action-constants');
var ApiUtils = require('../utils/apiUtils');

// an event-constant, like our action-constants, but only used here:
var CHANGE_EVENT = 'change',
    SIGNUP_EVENT = 'signup';
// our actual data: simple objects
var _currentUser;
var _selectedIdeaIndex;

function _establishUser(validatedCredentials) {
  _currentUser = validatedCredentials;
}
function _requestSignup(credentials) {
  ApiUtils.validateNewUser(credentials);
}
function _setSelectedIdea(ideaIndex) {
  console.log("selected idea is set: ", ideaIndex);
  _selectedIdeaIndex = ideaIndex;
}
function _getSelectedIdea() {
  return _selectedIdeaIndex;
}
function _clearSelectedIdea() {
  _selectedIdeaIndex = undefined;
}


var UserStore = assign(EventEmitter.prototype, {
  getCurrentUser: function() {
    return _currentUser;
  },
  returnSelectedIdea: function() {
    console.log(_getSelectedIdea());
    return _getSelectedIdea();
  },
  emitChange: function() {
    console.log("emit change firing");
    this.emit(CHANGE_EVENT);
  },
  emitSignupSuccess: function() {
    this.emit(SIGNUP_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  addSignupListener: function(callback) {
    this.on(SIGNUP_EVENT, callback);
  },
  removeSignupListener: function(callback) {
    this.removeListener(SIGNUP_EVENT, callback);
  },
  
  // Register the Store with the Dispatcher
  dispatcherIndex: Dispatcher.register(function(payload) {
    // the payloads that arrive from the Dispatcher include two properties:
    // an event-type, plus the `action` object. 
    var action = payload.action;
    // decide what to do, depending on the action's type:
    switch(action.type) {
      case ActionConstants.USER_REQUESTS_SIGNUP:
        _requestSignup(action.credentials);
        break;
      case ActionConstants.NEW_USER_REGISTERED: 
        _establishUser(action.credentials);
        UserStore.emitSignupSuccess();
        break;
      case ActionConstants.USER_JOINS_IDEA:
        _setSelectedIdea(action.ideaIndex);
        UserStore.emitChange();
        break;
      case ActionConstants.USER_LEAVES_IDEA:
        _clearSelectedIdea();
        UserStore.emitChange();
        break;
      default:
      // do nothing
    };

    return true;
  }),

});

module.exports = UserStore;