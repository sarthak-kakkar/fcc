const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  return action.type === 'LOGIN' ? {login: true} : state;
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

/*
https://forum.freecodecamp.org/t/redux-handle-an-action-in-the-store-redux-shortcuts/352704/7

This solves it, but it’s not quite what you want in reality: if you look at the what the hint solution is doing

if something changes, rebuild the state as a new value
if nothing changes just return the state (nothing changes)
So if you want to do what you’re doing (which is fine atm), you would do

let localState = {...state};
if(action.type==='LOGIN'){
  localState.login = true;
}
return state;
Note that this is not a terrific pattern because you’ll end up a. writing more code, and b. it explicitly mutates the state locally, and it’ll start to get hard to track in your head as the state gets more complex. 
It’s generally simpler to just return completely new values in the branch of the conditional. 
As I say though, it’s fine. 
Just keep this point in mind tho and think about adjusting that style when you start to get anything confusing.
*/
