// NOTE: we use constants for the actionType for two good reasons: 
// 1. we have a consolidated index of all possible actionTypes. 
// 2. we can't easily misspell an action name in one calling location without 
// throwing an `undefined` error. No silent failures.


module.exports = {
  // used by dispatcher to relay actions:
  VIEW_ACTION: 'VIEW_ACTION',
  API_ACTION: 'API_ACTION',
  // used by action creators:
  NEW_USER_REGISTERED: 'NEW_USER_REGISTERED',
  SIGNUP_NEW_USER: 'SIGNUP_NEW_USER',
  USER_REQUESTS_SIGNUP: 'USER_REQUESTS_SIGNUP',

}
