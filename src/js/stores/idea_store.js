// from React
var assign = require('react/lib/Object.assign');
// from Node
var EventEmitter = require('events').EventEmitter;
// our own creations
var Dispatcher = require('../dispatcher/dispatcher');
var ActionConstants = require('../constants/action-constants');
var UserStore = require('./user_store');

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
    return _ideas;
  },
  getSelectedIdea: function() {
    console.log("attempting to get idea");
    // race condition starts here:
    var selectedIndex = UserStore.returnSelectedIdea();
    console.log(selectedIndex);

    if (selectedIndex !== undefined) {
      return _ideas[selectedIndex];  
    } else {
      return undefined;
    };
    return {};
  },
  updateIdea: function(index) {

  },
  addIdea: function(newIdea) {

  },
  dispatcherIndex: Dispatcher.register(function(payload) {
    // the payloads that arrive from the Dispatcher include two properties:
    // an event-type, plus the `action` object. 
    var action = payload.action;
    // decide what to do, depending on the action's type:
    switch (action.type) {
      case ActionConstants.RECEIVED_ALL_IDEAS:
        _addAllIdeas(action.rawIdeas);
        IdeaStore.emitChange();
        break;
      // case ActionConstants.USER_JOINS_IDEA:
      //   // make sure the User Store is Finished Updating
      //   Dispatcher.waitFor([UserStore.dispatcherIndex]);
      //   // then notify the view, so it can retrieve the selected Idea;
      //   IdeaStore.emitChange();
      //   break;
      default:
        // do nothing
    };

    return true;
  }),

});

module.exports = IdeaStore;
