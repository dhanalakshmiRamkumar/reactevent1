import React from 'react';

class CounterComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value:10
    }
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement(){
    this.setState({value : ++this.state.value})
  }

  handleDecrement=() => {
    this.setState({value: --this.state.value})
  }

  render(){
    var a=10;
    const handleReset =() => {
      this.setState({value:10})
    }
    return(
      <>
      <h3>this is {this.props.componentName}</h3><br/>

      value:{this.state.value}<br/> <br/>

      <button onClick={this.handleIncrement}>Increment</button> &nbsp;

      <button onClick={this.handleDecrement}>Decrement</button> &nbsp;

      <button onClick ={handleReset}>reset</button>
      </>
    )
  }
}

export default CounterComponent;
