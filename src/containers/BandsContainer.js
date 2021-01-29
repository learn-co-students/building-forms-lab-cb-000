import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, index) => <Band band={band} key={index} />)

  render() {
    console.log( this.props )
    return(
      <div>
        <ul>{this.renderBands()}</ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}
const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch ({ type: 'ADD_BAND', newBand: formData })
})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
