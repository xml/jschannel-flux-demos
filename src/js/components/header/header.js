var React = require('react');
var Link = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    // converting this template from Angular required only:
    // 1. convert 'class' to 'className'
    // 2. 
    return (
      <div className="header">
        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <p className="navbar-brand">JSChannel IdeaFactory</p>
              <ul className="nav navbar-nav navbar-right">
                <li><Link href="/login">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = Header;