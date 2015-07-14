var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');


var IdeaModal = require('./idea-modal');

var IdeaListItem = React.createClass({
  _showIdeaModal: function() {
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
  render: function() {
    var idea = this.props.idea;
    return (
      <div className="ideaListItem">
        <div className="home__idea-list__idea" onClick={this._showIdeaModal}>
          <div className="row">
            <h4 className="col-sm-10">{idea.title}</h4>
            <p className="col-sm-2 count">Participants: {idea.teamCount}</p>
          </div>
          <p className="home__idea-list__idea__detail">{idea.detail}</p>
        </div>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Idea: {idea.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Idea Detail:</h4>
            <p class="modal-body__text">{ idea.detail }</p>
            <hr />
            <h4>Participants</h4>
            <p class="modal-body__text">participant count: {idea.teamCount}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
        
      </div>
    );

  }
});


module.exports = IdeaListItem;