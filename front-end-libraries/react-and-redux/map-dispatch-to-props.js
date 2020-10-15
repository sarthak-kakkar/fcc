const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
});

/*
The mapDispatchToProps() function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store.
It's similar in structure to the mapStateToProps() function you wrote in the last challenge.
It returns an object that maps dispatch actions to property names, which become component props.
However, instead of returning a piece of state, each property returns a function that calls dispatch with an action creator and any relevant action data.
You have access to this dispatch because it's passed in to mapDispatchToProps() as a parameter when you define the function, just like you passed state to mapStateToProps().
Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps().
This is similar to how it uses store.subscribe() for components that are mapped to state.
*/