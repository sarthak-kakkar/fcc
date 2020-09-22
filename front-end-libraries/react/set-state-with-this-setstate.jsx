class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      name: "React Rocks!"
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

{/*setState method is async and batches calls*/}
{/*
React expects you to never modify state directly, instead always use this.setState() when state changes occur. 
Also, you should note that React may batch multiple state updates in order to improve performance. 
What this means is that state updates through the setState method can be asynchronous. 
There is an alternative syntax for the setState method which provides a way around this problem. 
This is rarely needed but it's good to keep it in mind! Please consult the React documentation for further details.
*/}