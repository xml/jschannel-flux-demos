// from React
var assign = require('react/lib/Object.assign');
// from Node
var EventEmitter = require('events').EventEmitter;
// our own creations
var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/action-constants');

// an event-constant, like our action-constants:
var CHANGE_EVENT = 'change';

var _ideas = [];
function _addAllIdeas(rawIdeas) {
  // we might post-process our ideas here, before adding them to the store
  _ideas = rawIdeas;

}

var IdeaStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAllIdeas: function() {
    console.log(_ideas);
    return _ideas;
  },
  updateIdea: function(index) {

  },
  addIdea: function(newIdea) {

  },
  // Register the Store with the Dispatcher
  dispatcherIndex: Dispatcher.register(function(payload) {
    // the payloads that arrive from the Dispatcher include two properties:
    // an event-type, plus the `action` object. 
    var action = payload.action;
    // decide what to do, depending on the action's type:
    switch(action.type) {
      case Constants.RECEIVED_ALL_IDEAS:
        console.log("all ideas received at IdeaStore: ", action.rawIdeas);
        _addAllIdeas(action.rawIdeas);
        break;

      default:
        // do nothing
    };
    // after performing any of these updates based on incoming actions, 
    // we need to let components subscribed to this store know that something
    // has changed. We use pub-sub event-listeners for this:
    IdeaStore.emitChange();

    return true;
  }),

});

module.exports = IdeaStore;