const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction());

/*
dispatch method is what you use to dispatch actions to the Redux store. 
Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred
Then the method dispatches an action object to the Redux store.
*/