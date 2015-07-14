// Third-party dependencies:
var React = require('react');
var Link = require('react-router-component').Link;
var Button = require('react-bootstrap/lib/Button');

var IdeaList = require('./idea-list');
var UserselectedIdea = require('./user-selected-idea');
var NewIdeaModal = require('./new-idea-modal');

var Ideas = React.createClass({
  _showNewIdeaModal: function() {
    this.openModal();
  },
  getInitialState: function() {
    return { showModal: false };
  },
  closeModal: function(){
    this.setState({ showModal: false });
  },
  openModal: function(){
    this.setState({ showModal: true });
  },
  render:function(){
    // we use parens around multi-line JSX to tell React to ignore whitespace
    return (
      <div className="ideas-wrapper">
        <div className="bs-callout bs-callout-warning">
          <p>Get started now, collaborating on something you care about, by clicking 'New Idea'. Click on any existing idea to learn more about it, to join/leave it, and to see who else has joined it. You can join only one idea at a time.</p>
        </div>
        <Button bsStyle='success' bsSize='small' onClick={this._showNewIdeaModal}>
          New Idea
        </Button>
        < NewIdeaModal closeFunc={this.closeModal} show={this.state.showModal} />
        <UserselectedIdea />

        <IdeaList />

      </div>
    );
  },
});

module.exports = Ideas;