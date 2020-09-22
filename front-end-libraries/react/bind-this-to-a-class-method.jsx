class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // change code below this line
    this.handleClick = this.handleClick.bind(this)
    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

{/*
In addition to setting and updating state, you can also define methods for your component class. 
A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. 
There are a few ways to allow your class methods to access this.

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. 
You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. 
Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

Refer to -> https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application
*/}
