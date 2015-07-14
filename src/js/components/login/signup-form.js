var React = require('react');
var Button = require('react-bootstrap').Button;

var navUtils = require('../../utils/navUtils');
var ViewActions = require('../../actions/ViewActions');
var UserStore = require('../../stores/user_store');

var SignupForm = React.createClass({
  componentDidMount: function() {
    UserStore.addChangeListener(this._onStoreChange);
    UserStore.addSignupListener(this._onSignupSuccess);
  },
  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onStoreChange);
    UserStore.removeSignupListener(this._onSignupSuccess);
  },
  getInitialState: function() {
    return {
      name: '',
      email: ''
    }
  },
  _onSignupSuccess: function() {
    // Just change routes. 
    navUtils.navigate('/ideas');
  },
  _onStoreChange: function() {
    // Normally, this would be where we would setState() with the new data
    // in the store, and re-render. 
  },
  _onChangeName: function(event, value) {
    this.setState({
      name: event.target.value
    });
  },
  _onChangeEmail: function(event, value) {
    this.setState({
      email: event.target.value.trim()
    });
  },
  _onFormSubmit: function(event) {
    event.preventDefault();
    ViewActions.SignupNewUser(this.state);
  },

  render: function() {
    return (
      <form className="signup-form"
            name = "signupForm"
            onSubmit = {this._onFormSubmit }>
        <div className = "signup-form__item row">
          <h4 className = "signup-form__item__heading"> Your Name </h4> 
          <p className = "signup-form__item__subhead"> 
            <em> (So peeps can recognize you) < /em > 
          </p> 
          <input  type = "text"
                  name = "name"
                  className = "form-control signup-form__item__input"
                  placeholder = "FirstName LastName"
                  required 
                  value = {this.state.name }
                  onChange = {this._onChangeName } /> 
        </div > 
        <div className = "row" >
          <h4 className = "signup-form__item__heading" > Email Address < /h4> 
          <p className = "signup-form__item__subhead" > < em > (So IdeaFactory can recognize you) < /em > < /p > 
          <input type = "email"
                  name = "email"
                  className = "form-control signup-form__item__input"
                  placeholder = "handle@domain.com"
                  required 
                  value = {this.state.email }
                  onChange = {this._onChangeEmail } /> 
        </div > 
        < Button  bsStyle = 'success'bsSize = 'large'type = "submit" > Create! < /Button> 
      </form >
    );
  }
});
// NOTE: We could easily use React-Boostrap's inputs here as well, but we're keeping it simple


module.exports = SignupForm;
