// NOTE: we use constants for the actionType for two good reasons: 
// 1. we have a consolidated index of all possible actionTypes. 
// 2. we can't easily misspell an action name in one calling location without 
// throwing an `undefined` error. No silent failures.


module.exports = {
  SIGNUP_NEW_USER: 'SIGNUP_NEW_USER',
  NEW_USER_REGISTERED: 'NEW_USER_REGISTERED',

}
