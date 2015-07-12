var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var ActionConstants = require('../constants/action-constants');

var Dispatcher = assign(new Dispatcher(), {
  // It's possible to call Dispatcher.dispatch() from other contexts.
  // Better to create accessor methods, and let those methods do the
  // work. In this case, we've created two, in case we ever find it 
  // useful to distinguish View Actions from API Actions. 
  handleViewAction: function(action) {
    // push Actions to console so we can monitor them
    console.log('action', action);
    // simply, the dispatcher will just relay out any viewActions:
    this.dispatch({
      source: ActionConstants.VIEW_ACTION,
      action: action
    });
  },
  handleApiAction: function(action) {
    // push Actions to console so we can monitor them
    console.log('action received at Dispatcher', action);
    // simply, the dispatcher will just relay out any apiActions:
    this.dispatch({
      source: ActionConstants.API_ACTION,
      action: action
    });
  },
})

module.exports = Dispatcher;