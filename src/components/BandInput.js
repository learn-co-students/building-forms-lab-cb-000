import React, { Component } from 'react'
// import { connect } from 'react-redux'

class BandInput extends Component {

state = { name: ''}

handleChange = event => {
  this.setState({name: event.target.value})
}

handleSubmit = event => {
  event.preventDefault()
  this.props.addBand(this.state)
  this.setState({name: ''})
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput

// the below worked but failed the tests, because the tests want addBand coming in as a prop from the parent, not from redux connection. The parent then takes in both dispatch and state props from redux connection; passes the dispatch to BandInput and uses state to generate the list of bands. 

// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch ({ type: 'ADD_BAND', payload: formData })
// })

// export default connect(null, mapDispatchToProps)(BandInput)
