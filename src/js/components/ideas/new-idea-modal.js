var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

var ViewActions = require('../../actions/ViewActions');

var NewIdeaModal = React.createClass({
  closeModal: function() {
    this.props.closeFunc();
  },
  saveNewIdea: function() {
    ViewActions.UserCreatesIdea(this.state.title, this.state.detail);
    this.closeModal();
  },
  getInitialState: function() {
    return {
      title: '',
      detail: ''
    };
  },
  _handleTitleUpdate: function(evt) {
    this.setState({
      title: evt.target.value
    });
  },
  _handleDetailUpdate: function(evt) {
    this.setState({
      detail: evt.target.value
    });
  },
  render: function() {
    var idea = this.props.idea;
    return (
      <Modal show={this.props.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Idea:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-input__label">Your Idea's Short Title:</p>
          <input type="text" value={this.state.title} className="modal-input__input form-control" onChange={this._handleTitleUpdate} />

          <p className="modal-input__label">Full Description:</p>
          <textarea value={this.state.detail} className="modal-input__input form-control" onChange={this._handleDetailUpdate} ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='success' onClick={this.saveNewIdea}>Create this Idea</Button>
          <Button bsStyle='warning' onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

module.exports = NewIdeaModal;
