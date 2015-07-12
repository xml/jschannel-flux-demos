// Third-party dependencies:
var React = require('react');
var Route = require('react-router-component');
var Locations = Route.Locations;
var Location = Route.Location;
// Our own modules:
var SuperStructure = require('./superstructure');


var App = React.createClass({
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <h1>App</h1>
    );
  },
});

module.exports = App;