// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => ({type: ADD, message});

const messageReducer = (state = [], action) => {
    return action.type === ADD ? [...state, action.message] : state;
}

const store = Redux.createStore(messageReducer);