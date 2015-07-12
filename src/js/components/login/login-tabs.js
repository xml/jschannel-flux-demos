var React = require('react');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var SignupForm = require('./signup-form');

var LoginTabs = React.createClass({
  render: function() {
    return (
      <TabbedArea defaultActiveKey={1}>
        <TabPane eventKey={1} tab='New User'>
          <SignupForm />
        </TabPane>
        <TabPane eventKey={2} tab='Existing User Login'>TabPane 2 content</TabPane>
      </TabbedArea>
    );
  }
});

module.exports = LoginTabs;