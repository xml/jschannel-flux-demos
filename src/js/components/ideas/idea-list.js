var React = require('react');

var IdeaStore = require('../../stores/idea_store');
var IdeaListItem = require('./idea-list-item');


function getStateFromIdeaStore() {
  return IdeaStore.getAllIdeas();
}
function getIdeaListItem(idea, index) {
  return (
    <IdeaListItem key={index} idea={idea} />
  );
}


var IdeaList = React.createClass({
  componentDidMount: function() {
    IdeaStore.addChangeListener(this._onStoreChange);
  },
  componentWillUnmount: function() {
    IdeaStore.removeChangeListener(this._onStoreChange);
  },
  _onStoreChange: function() {
    this.setState(getStateFromIdeaStore());
  },
  getInitialState: function() {
    return {ideas: getStateFromIdeaStore()};
  },
  render: function() {

    var items = this.state.ideas.map(getIdeaListItem);
    console.log(items);
    return ( 
      <div className="home__idea-list">
        <h3 className="home__idea-list__header">All Active Ideas</h3>
        {items}
      </div>
    );
  },
});

module.exports = IdeaList;
