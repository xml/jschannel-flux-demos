var React = require('react');

var SignupForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      email: ''
    }
  },
  _onChangeName: function(event, value) {
    this.setState({ name: event.target.value });
  },
  _onChangeEmail: function(event, value) {
    this.setState({ email: event.target.value.trim() });
  },
  _onFormSubmit: function(event) {
    event.preventDefault();
    console.log(this.state);
  },

  render: function() {
    return (
      <form className="signup-form" name="signupForm" onSubmit={this._onFormSubmit}>
        <div className="signup-form__item row">
            <h4 className="signup-form__item__heading">Your Name</h4>
            <p className="signup-form__item__subhead"><em> (So peeps can recognize you)</em></p>
            <input 
              type="text" 
              name="name" 
              className="form-control signup-form__item__input" 
              placeholder="FirstName LastName" 
              required 
              value={this.state.name}
              onChange={this._onChangeName} />
        </div>
        <div className="row">
            <h4 className="signup-form__item__heading">Email Address</h4>
            <p className="signup-form__item__subhead"><em>(So IdeaFactory can recognize you)</em></p>
            <input 
              type="email" 
              name="email" 
              className="form-control signup-form__item__input" 
              placeholder="handle@domain.com" 
              required 
              value={this.state.email} 
              onChange={this._onChangeEmail}/>
        </div>
        <button type="submit" className="login-form__submit-button btn btn-lg btn-success" >Create!</button>
      </form>
    );
  }
});

module.exports = SignupForm;