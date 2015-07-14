var React = require('react');
var ObjectAssign = require('object-assign');

var IdeaStore = require('../../stores/idea_store');
var UserStore = require('../../stores/user_store');
var SelectedideaModal = require('./selected-idea-modal');

function getSelectedIdeaIndex() {
  return UserStore.returnSelectedIdea();
}

function getSelectedIdeaFromIdeaStore() {
  return IdeaStore.getSelectedIdea();
}

var UserSelectedIdea = React.createClass({
  componentDidMount: function() {
    UserStore.addChangeListener(this._onStoreChange);
  },
  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onStoreChange);
  },
  _onStoreChange: function() {
    var newState = ObjectAssign(this.state, {
      selectedIdea: getSelectedIdeaFromIdeaStore(),
      selectedIdeaIndex: getSelectedIdeaIndex()
    });
    this.setState(newState);
  },
  getInitialState: function() {
    console.log("In User Selected Idea, Index is: ", UserStore.returnSelectedIdea());
    return {
      selectedIdea: getSelectedIdeaFromIdeaStore(),
      showModal: false,
      selectedIdeaIndex: getSelectedIdeaIndex()
    }
  },
  _showIdeaModal: function() {
    this.openModal();
  },
  closeModal: function(){
    var newState = ObjectAssign(this.state, {
      showModal: false
    });
    this.setState(newState);
  },

  openModal: function(){
    var newState = ObjectAssign(this.state, {
      showModal: true
    });
    this.setState(newState);
  },
  render: function() {
    console.log("state:");
    console.log(this.state);
    var idea = this.state.selectedIdea;
    if (idea !== undefined) {
      return (
        <div className="home__idea-state">
          <div>
            <h3 className="home__idea-state__current-idea__header">My Selection</h3>
            <div className="home__idea-state__current-idea bg-primary" onClick={this._showIdeaModal}>
                <div className="row">
                    <h4 className="col-sm-10">{idea.title}</h4>
                    <p className="col-sm-2 count">Participants: {idea.teamCount}</p>
                </div>
                <p className="home__idea-state__current-idea__detail">{idea.detail}</p>
            </div>
          </div>
          <SelectedideaModal idea={idea} closeFunc={this.closeModal} show={this.state.showModal} index={this.state.selectedIdeaIndex} />
        </div>
      );
    } else {
      return (<div className="noneSelected"></div>);
    }
  }
    
});

module.exports = UserSelectedIdea;