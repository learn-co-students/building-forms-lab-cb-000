import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  renderBands = () => {
    this.props.bands.map((band, id) => <li key={id}>{band}</li>)
  }
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({
      type: 'ADD_BAND',
      payload: band
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
