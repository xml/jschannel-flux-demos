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

function _establishUser(validatedCredentials) {
  _currentUser = validatedCredentials;
}
function _requestSignup(credentials) {
  ApiUtils.validateNewUser(credentials);
}


// Create the Public Store Object with Node's EventEmitter:
var UserStore = assign(EventEmitter.prototype, {
  getCurrentUser: function() {
    return _currentUser;
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

      default:
      // do nothing
    };
    // after performing any of these updates based on incoming actions, 
    // we need to let components subscribed to this store know that something
    // has changed. We use events for this:

    return true;
  }),

});

module.exports = UserStore;