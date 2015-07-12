var React = require('react');
var Link = require('react-router-component').Link;

var LoginTabs = require('./login-tabs');

var Login = React.createClass({
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome to the JSChannel IdeaFactory</h1>
        </div>
        <LoginTabs />
        <li><Link href="/ideas">Go to Ideas</Link></li>
      </div>
    );
  },
});

module.exports = Login;