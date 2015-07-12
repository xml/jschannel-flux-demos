// Third-party dependencies:
var React = require('react');
var Link = require('react-router-component').Link;

var Ideas = React.createClass({
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <div>
        <h1>Ideas</h1>
        <p>This is the ideas component</p>
        <li><Link href="/login">Go to Login</Link></li>
      </div>
    );
  },
});

module.exports = Ideas;