// This module is an example of abstracting certain implementation
// details, and also of providing a context that captures some
// otherwise global variables.
// It's also an example of things that are handled a bit magically
// by frameworks: in this case, the capturing of a router instance
// so that you can interact with it later, to change routes 
// programatically. This pattern is common with React/Flux. 

var _navigator;

module.exports = {
  captureRouterRef: function(ref) {
    _navigator = ref;
  },
  navigate: function(path) {
    _navigator.navigate(path);
  },
};
