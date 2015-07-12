// Third-party dependencies:
var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

// Our own modules:
var Superstructure = require('./superstructure');
var Login = require('./login/login');
var Ideas = require('./ideas/ideas');
var navUtils = require('../utils/navUtils');

var App = React.createClass({
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <Superstructure>
        <Locations ref="theRouter">
          <Location path="/" handler={Login} />
          <Location path="/ideas" handler={Ideas} />
          <Location path="/login" handler={Login} />
        </Locations>
      </Superstructure>
    );
  },
  componentDidMount: function() {
    navUtils.captureRouterRef(this.refs.theRouter);
  },

});

module.exports = App;