class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({input: event.target.value});
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({messages: [...state.messages, state.input],
    input: ''}));
  }
  render() {
    const messages = this.state.messages.map((element, index) => <li key={index}>{element}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit!</button>
        <ul>{messages}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};

{/*
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
      </div>
    );
  }
};
*/}
