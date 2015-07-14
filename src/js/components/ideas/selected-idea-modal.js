var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

var ViewActions = require('../../actions/ViewActions');

var SelectedIdeaModal = React.createClass({
  getInitialState: function() {
    return {
      editing: false
    }
  },
  closeModal: function() {
    this.props.closeFunc();
  },
  editDetail: function() {
    this.setState({
      editing: true
    });
  },
  cancelEdits: function() {
    this.setState({
      editing: false
    });
  },
  leaveIdea: function() {
    ViewActions.CurrentUserLeavesIdea();
    this.closeModal();
  },
  render: function() {
    var idea = this.props.idea;
    var index = this.props.index;
    return (
      <Modal show={this.props.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Idea: {idea.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Idea Detail:</h4>
          { (this.state.editing) ? 
            <EditableDetails cancelEdits={this.cancelEdits} saveEdits={this.saveEdits} idea={idea} index={index}/> : 
            <StaticDetails editDetail={this.editDetail} idea={idea} /> }
          <hr />
          <h4>Participants</h4>
          <p className="modal-body__text">participant count: {idea.teamCount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='danger' onClick={this.leaveIdea}>Leave This Idea</Button>
          <Button bsStyle='warning' onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

var StaticDetails = React.createClass({
  render: function() {
    var idea = this.props.idea;
    return (
      <div className="StaticDetails">
        <p className="modal-body__text">{ idea.detail }</p>
        <Button bsStyle='primary' bsSize='small' onClick={this.props.editDetail}>Contribute/Edit</Button>
      </div>
    );
  }
});

var EditableDetails = React.createClass({
  saveEdits: function() {
    ViewActions.UserEditsIdea(this.props.index, this.state.value);
    this.props.cancelEdits();
  },
  getInitialState: function() {
    return {value: this.props.idea.detail};
  },
  _changeHandler: function(evt) {
    this.setState({
      value: evt.target.value
    });
  },
  render: function() {
    return (
      <div className="EditableDetails">
        <textarea className="form-control modal__body__textarea" value={this.state.value} onChange={this._changeHandler}></textarea>
        <Button bsStyle='success' bsSize='small' onClick={this.saveEdits}>Save Changes/Edit</Button>
        <Button bsStyle='warning' bsSize='small' onClick={this.props.cancelEdits}>Cancel Changes/Edit</Button>
      </div>
    );
  }
});

module.exports = SelectedIdeaModal;