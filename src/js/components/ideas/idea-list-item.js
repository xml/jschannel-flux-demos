var React = require('react');

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
    var idea = this.props.idea,
        index = this.props.index;

    return (
      <div className="ideaListItem">
        <div className="home__idea-list__idea" onClick={this._showIdeaModal}>
          <div className="row">
            <h4 className="col-sm-10">{idea.title}</h4>
            <p className="col-sm-2 count">Participants: {idea.teamCount}</p>
          </div>
          <p className="home__idea-list__idea__detail">{idea.detail}</p>
        </div>
        <IdeaModal idea={idea} closeFunc={this.closeModal} show={this.state.showModal} index={index} />
        
      </div>
    );

  }
});


module.exports = IdeaListItem;