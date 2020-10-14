class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {input: "", messages: []};
  }
  // Change code above this line
  render() {
    return <div />
  }
};

{/*
Although React components can manage their own state locally, when you have a complex app, it's generally better to keep the app state in a single location with Redux.
There are exceptions when individual components may have local state specific only to them.
Finally, because Redux is not designed to work with React out of the box, you need to use the react-redux package.
It provides a way for you to pass Redux state and dispatch to your React components as props.
*/}