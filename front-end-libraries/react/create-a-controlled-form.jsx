class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* change code below this line */}
          <input value={this.state.input} onChange={this.handleChange}/>
          {/* change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}

{/*
https://forum.freecodecamp.org/t/doubt-this-setstate/342916
If you want to return an object using an arrow function you have two choices:

Explicit return:

const func = param => {
  return {
    prop1: 'value 1',
    prop2: 'value 2'
  };
};
OR
Implicit return:

const func = param => ({
  prop1: 'value 1',
  prop2: 'value 2'
});
Note in the second example, the object returned is surrounded by parentheses. This tells JavaScript to return the value inside.
*/}
