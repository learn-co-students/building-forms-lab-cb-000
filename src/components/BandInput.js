import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
        name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name !== '') {
      console.log(this.state)
      this.props.addBand(this.state)
      this.setState({ name: '' })
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add band: </label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
