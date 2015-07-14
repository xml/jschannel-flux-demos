var App = require('./components/app');
var React = require('react');
var ApiUtils = require('./utils/apiUtils');

// start obtaining our key data right away
// The views will be notified when the data arrives
ApiUtils.retrieveAllIdeas();
 
// render the App component into the main element
React.render(<App />, document.getElementById('main'));