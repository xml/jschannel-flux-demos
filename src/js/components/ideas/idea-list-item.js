var React = require('react');

var IdeaListItem = React.createClass({
  _showIdeaModal: function() {
    return false;
  },
  render: function() {
    var idea = this.props.idea;
    return (
      <div className="home__idea-list__idea" onClick={this._showIdeaModal}>
        <div className="row">
          <h4 className="col-sm-10">{idea.title}</h4>
          <p className="col-sm-2 count">Participants: {idea.teamCount}</p>
        </div>
        <p className="home__idea-list__idea__detail">{idea.detail}</p>
      </div>
    );

  }
});


module.exports = IdeaListItem;