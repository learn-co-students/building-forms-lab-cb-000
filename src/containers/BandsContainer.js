import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    const { bands } = this.props
    return(
      <div>
      <BandInput addBand={this.props.addBand}/>
      <ul>
        <Bands bands={this.props.bands}/>
      </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: 'ADD_BAND', band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
