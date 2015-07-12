var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var Dispatcher = require('../dispatcher/dispatcher');
var ActionConstants = require('../constants/action-constants');


// an event-constant, like our action-constants, but only used here:
var CHANGE_EVENT = 'change';
// our actual data: simple objects
var _currentUser;

// Create the Public Store Object with Node's EventEmitter:
var UserStore = assign(EventEmitter.prototype, {
  getCurrentUser: function() {
    return _currentUser;
  },
  setCurrentUser: function(validatedCredentials) {
    _currentUser = validatedCredentials;
  },


  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
  // Register the Store with the Dispatcher
  dispatcherIndex: Dispatcher.register(function(payload) {
    // the payloads that arrive from the Dispatcher include two properties:
    // an event-type, plus the `action` object. 
    var type = payload.type;
    // decide what to do, depending on the action's type:
    switch(type) {
      case ActionConstants.NEW_USER_REGISTERED: 
        console.log("credentials received at Store: ", payload.credentials);
        setCurrentUser(payload.credentials);
        break;

      default:
      // do nothing
    }
    // after performing any of these updates based on incoming actions, 
    // we need to let components subscribed to this store know that something
    // has changed. We use events for this:
    Store.emitChange();

    return true;
  }),

});

module.exports = UserStore;