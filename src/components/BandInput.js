// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  constructor() {
    super();
    
    this.state = {
      name: ''
    }
  }
  
  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
          <label htmlFor="name">Band Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateName}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}



export default BandInput;
