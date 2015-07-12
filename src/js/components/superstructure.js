var React = require('react');
var Header = require('./header/header');

// This component contains everything that's constant from route to route:
// header, menus, container, etc.

var Superstructure = React.createClass({
  render: function() {
    // this.props.children will be the 'handler'
    // declared in app.js: the component that will 
    // be the root component on the route. 
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
      );
  }
});

module.exports = Superstructure;