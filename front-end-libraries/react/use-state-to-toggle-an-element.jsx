class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
      this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

{/*
Sometimes you might need to know the previous state when updating the state. 
However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. 
This means you can't rely on the previous value of this.state or this.props when calculating the next value. 
So, you should not use code like this:

this.setState({
  counter: this.state.counter + this.props.increment
});

Instead, you should pass setState a function that allows you to access state and props. 
Using a function with setState guarantees you are working with the most current values of state and props. 
This means that the above should be rewritten as:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
*/}
