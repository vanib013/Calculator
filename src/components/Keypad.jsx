import React, { Component } from 'react';

class Keypad extends Component {
  constructor(props) {
    super(props);

    this.state = {
       operand1: '',
       operand2: '',
       operator: null,
       result: null
     };
  }

  handleNumberSelection = (value) => {
    console.log(value);
    if (this.state.operator == null) {
      this.setState({ operand1: value })
    }
    else {
      this.setState({ operand2: value})
    }

  }

  handleEquals() {
    if (this.state.operator == "+")
      this.setState ({
        result: (parseInt(this.state.operand1) + parseInt(this.state.operand2))
      })
    else if (this.state.operator == "-")
      this.setState ({
        result: (parseInt(this.state.operand1) - parseInt(this.state.operand2))
      })
    else if (this.state.operator == "*")
      this.setState ({
        result: (parseInt(this.state.operand1) * parseInt(this.state.operand2))
      })
    else if (this.state.operator == "/")
      this.setState ({
        result: (parseInt(this.state.operand1) / parseInt(this.state.operand2))
      })
 }

  handleClear() {
    this.setState ({
      operand1: '',
      operator: null,
      operand2: '',
      result: null
    })
  }


  render() {
    return (
      <div className="container">
        <h2 className="heading">
          <i className="fa fa-calculator"></i>
          Calculator
        </h2>
        <div className="result">
          <label>{this.state.operand1}</label>
          &nbsp;
          <label>{this.state.operator}</label>
          &nbsp;
          <label>{this.state.operand2}</label>
          &nbsp;
          <label>=&nbsp;{this.state.result}</label>
        </div>
        <div className="keypad">
          <div className="row">
            <label>&nbsp;&nbsp;&nbsp;</label>
            <input
              className="number"
              type="button"
              value="1"
              onClick={() => this.handleNumberSelection('1')}
            />
            <input
              className="number"
              type="button"
              value="2"
              onClick={() => this.handleNumberSelection('2')}
            />
            <input
              className="number"
              type="button"
              value="3"
              onClick={() => this.handleNumberSelection('3')}
            />
          </div>
          <div className="row">
            <label>&nbsp;&nbsp;&nbsp;</label>
            <input
              className="number"
              type="button"
              value="4"
              onClick={() => this.handleNumberSelection('4')}
            />
            <input
              className="number"
              type="button"
              value="5"
              onClick={() => this.handleNumberSelection('5')}
            />
            <input
              className="number"
              type="button"
              value="6"
              onClick={() => this.handleNumberSelection('6')}
            />
          </div>
          <div className="row">
            <label>&nbsp;&nbsp;&nbsp;</label>
            <input
              className="number"
              type="button"
              value="7"
              onClick={() => this.handleNumberSelection('7')}
            />
            <input
              className="number"
              type="button"
              value="8"
              onClick={() => this.handleNumberSelection('8')}
            />
            <input
              className="number"
              type="button"
              value="9"
              onClick={() => this.handleNumberSelection('9')}
            />
          </div>
          <div className="row">
            <label>&nbsp;&nbsp;&nbsp;</label>
            <input
              className="numberZero"
              type="button"
              value="0"
              onClick={() => this.handleNumberSelection('0')}
            />
          </div>
          <div className="row">
            <label>&nbsp;&nbsp;&nbsp;</label>
            <input
              className="sign"
              type="button"
              value="+"
              onClick={event => this.setState({ operator: event.target.value})}
            />

            <input
              className="sign"
              type="button"
              value="-"
              onClick={event => this.setState({ operator: event.target.value})}
            />
            <input
              className="sign"
              type="button"
              value="*"
              onClick={event => this.setState({ operator: event.target.value})}
            />
          </div>
          <div className="row">
            <label>&nbsp;&nbsp;&nbsp;</label>
            <input
              className="sign"
              type="button"
              value="/"
              onClick={event => this.setState({ operator: event.target.value})}
            />
            <input
              className="sign"
              type="button"
              value="="
              onClick={() => this.handleEquals()}
            />
            <input
              className="sign"
              type="button"
              value="C"
              onClick={() => this.handleClear()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Keypad;
