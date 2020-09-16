const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

// change code above this line

Items.defaultProps = {
  quantity: 0
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

{/*
It's considered a best practice to set propTypes when you know the type of a prop ahead of time. 
You can define a propTypes property for a component in the same way you defined defaultProps. 
Doing this will check that props of a given key are present with a given type. 
Here's an example to require the type function for a prop called handleClick:

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

In the example above, the PropTypes.func part checks that handleClick is a function. 
Adding isRequired tells React that handleClick is a required property for that component.

Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';
https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type
*/}