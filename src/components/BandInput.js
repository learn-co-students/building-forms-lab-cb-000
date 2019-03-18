import React, { Component } from 'react'

class BandInput extends Component {
  state = {
      name: '',
    }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange}  />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default BandInput
