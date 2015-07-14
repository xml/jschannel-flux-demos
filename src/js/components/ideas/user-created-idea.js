var React = require('react');

var IdeaStore = require('../../stores/idea_store');
var UserStore = require('../../stores/user_store');

function getSelectedIdeaFromIdeaStore() {
  return {
    selectedIdea: IdeaStore.getSelectedIdea()
  }; 
}

var UserSelectedIdea = React.createClass({
  componentDidMount: function() {
    UserStore.addChangeListener(this._onStoreChange);
  },
  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onStoreChange);
  },
  _onStoreChange: function() {
    this.setState(getSelectedIdeaFromIdeaStore());
  },
  getInitialState: function() {
    return getSelectedIdeaFromIdeaStore();
  },
  render: function() {
    console.log(this.state);
    var idea = this.state.selectedIdea;
    if (idea !== undefined) {
      return (
        <div className="home__idea-state">
          <div>
            <h3 className="home__idea-state__current-idea__header">My Selection</h3>
            <div className="home__idea-state__current-idea bg-primary">
                <div className="row">
                    <h4 className="col-sm-10">{idea.title}</h4>
                    <p className="col-sm-2 count">Participants: {idea.teamCount}</p>
                </div>
                <p className="home__idea-state__current-idea__detail">{idea.detail}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div className="noneSelected"></div>);
    }
  }
    
});

module.exports = UserSelectedIdea;