var React = require('react');
var Link = require('react-router-component').Link;


var Login = React.createClass({
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <div>
        <h2>Login</h2>
        <li><Link href="/ideas">Go to Ideas</Link></li>
      </div>
    );
  },
});

module.exports = Login;