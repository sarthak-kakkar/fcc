const state = [];

// Change code below this line

const mapStateToProps = (state) => ({messages: state});

/*
The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. 
This way, you make sure that each component only has access to the state it needs. 
You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().

In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch.

Note: Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().
*/