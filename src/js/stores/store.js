// from React
var assign = require('react/lib/Object.assign');
// from Node
var EventEmitter = require('events').EventEmitter;
// our own creations
var Dispatcher = require('../dispatchers/dispatcher');
var Constants = require('../constants/action-constants');

// an event-constant, like our action-constants:
var CHANGE_EVENT = 'change';


// Create the Public Store Object with Node's EventEmitter:
var Store = assign(EventEmitter.prototype, {
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
    var action = payload.action;
    // decide what to do, depending on the action's type:
    switch(action.actionType) {
      
    }
    // after performing any of these updates based on incoming actions, 
    // we need to let components subscribed to this store know that something
    // has changed. We use events for this:
    Store.emitChange();

    return true;
  }),

});

module.exports = Store;