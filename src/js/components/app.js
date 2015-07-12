// Third-party dependencies:
var React = require('react');
var Route = require('react-router-component');
var Locations = Route.Locations;
var Location = Route.Location;
// Our own modules:
var Superstructure = require('./superstructure');
var Login = require('./login/login');
var Ideas = require('./ideas/ideas');


var App = React.createClass({
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <Superstructure>
        <Locations>
          <Location path="/" handler={Login} />
          <Location path="/ideas" handler={Ideas} />
          <Location path="/login" handler={Login} />
        </Locations>
      </Superstructure>
    );
  },
});

module.exports = App;