var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var VIEW_ACTION = 'VIEW_ACTION';

// creating a Dispatcher and augmenting its methods with object.assign:
var Dispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    // push Actions to console so we can monitor them
    console.log('action', action);
    // simply, the dispatcher will just relay out any viewActions:
    this.dispatch({
      source: VIEW_ACTION,
      action: action
    })
  }
})

module.exports = Dispatcher;