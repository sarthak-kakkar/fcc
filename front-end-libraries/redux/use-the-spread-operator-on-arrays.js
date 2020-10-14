const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

/*
The spread syntax can be used multiple times in array composition like this, but it's important to note that it only makes a shallow copy of the array.
That is to say, it only provides immutable array operations for one-dimensional arrays.

https://medium.com/@kevinlai76/the-spread-operator-deep-and-shallow-copies-d193ac9b58bf
*/
