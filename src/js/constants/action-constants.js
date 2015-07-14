// NOTE: we use constants for the actionType for two good reasons: 
// 1. we have a consolidated index of all possible actionTypes. 
// 2. we can't easily misspell an action name in one calling location without 
// throwing an `undefined` error. No silent failures.


module.exports = {
  // used by dispatcher to relay actions:
  API_ACTION: 'API_ACTION',
  VIEW_ACTION: 'VIEW_ACTION',
  // used by action creators:
  NEW_USER_REGISTERED: 'NEW_USER_REGISTERED',
  RECEIVED_ALL_IDEAS: 'RECEIVED_ALL_IDEAS',
  SIGNUP_NEW_USER: 'SIGNUP_NEW_USER',
  USER_CREATES_IDEA: 'USER_CREATES_IDEA',
  USER_EDITS_IDEA: 'USER_EDITS_IDEA',
  USER_JOINS_IDEA: 'USER_JOINS_IDEA',
  USER_LEAVES_IDEA: 'USER_LEAVES_IDEA',
  USER_REQUESTS_SIGNUP: 'USER_REQUESTS_SIGNUP',
}
