var RSVP = require('rsvp');
var ApiActions = require('../actions/ApiActions');

var _starterIdeas = [{
  title: "Get Together and Learn about React",
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat mauris, faucibus quis pharetra sit amet, pretium ac libero. Etiam vehicula eleifend bibendum. Morbi gravida metus ut sapien condimentum sodales mollis augue sodales. Vestibulum quis quam at sem placerat aliquet. Curabitur a felis at sapien ullamcorper fermentum. Mauris molestie arcu et lectus iaculis sit amet eleifend eros posuere. Fusce nec porta orci.",
  teamCount: 7
},{
  title: "Do a Flux Workshop Where You Write a Flux app about an IdeaFactory!",
  detail: "Integer vitae neque odio, a sollicitudin lorem. Aenean orci mauris, tristique luctus fermentum eu, feugiat vel massa. Fusce sem sem, egestas nec vulputate vel, pretium sit amet mi. Fusce ut nisl id risus facilisis euismod. Curabitur et elementum purus. Duis tincidunt fringilla eleifend. Morbi id lorem eu ante adipiscing feugiat. Sed congue erat in enim eleifend dignissim at in nisl. Donec tortor mauris, mollis vel pretium vitae, lacinia nec sapien. Donec erat neque, ullamcorper tincidunt iaculis sit amet, pharetra bibendum ipsum. Nunc mattis risus ac ante consequat nec pulvinar neque molestie. Etiam interdum nunc at metus lacinia non varius erat dignissim.",
  teamCount: 12
},{
  title: "Have a Javascript Conference in Bangalore",
  detail: "Donec consectetur pellentesque nisi sit amet elementum. Duis iaculis velit at eros dapibus vehicula. Vestibulum erat risus, rutrum ut vulputate eu, rhoncus ut dolor. Etiam pellentesque lobortis velit. Suspendisse arcu lacus, ornare in sollicitudin eget, hendrerit a neque. Donec ac justo in ante gravida mollis. Praesent scelerisque molestie risus sodales fringilla. Vivamus quis lorem in mauris pulvinar tempor. Nam in nisl vel neque commodo semper sed eu nibh. Duis cursus lectus vel odio posuere quis aliquet quam blandit. Maecenas neque nibh, sollicitudin posuere tempus adipiscing, molestie vel nibh. Mauris porttitor, lacus vitae aliquam aliquam, risus urna tempus elit, sit amet malesuada erat dolor iaculis mi. Donec quam sapien, adipiscing eget sodales vitae, blandit eu odio.",
  teamCount: 2
},{
  title: "Hang out with Doug & Yehuda",
  detail: "More Good Parts than ever, these days. I hear Yehuda likes sparkly things. (Rubies & Embers)",
  teamCount: 9
}];

var APIUtils = {
  validateNewUser: function(credentials) {
    // normally we would make a network call. Instead, we simulate one:
    var response = {
      status: 'accepted',
      name: credentials.name,
      email: credentials.email
    }
    return new RSVP.Promise(function(resolve, reject){
      // simulate async
      window.setTimeout(function() {
        // resolve the promise, just like Axios or $http would
        resolve(response);
      }, 500);
      
    });

  },
  retrieveAllIdeas: function() {
    // simulate async
    window.setTimeout(function() {
      // let everyone know new messages have arrived
      ApiActions.AllIdeasReceived(_starterIdeas);
    }, 500);
  }

};

module.exports= APIUtils;