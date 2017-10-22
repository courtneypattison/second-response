import React, { Component } from 'react';
import { connect } from 'react-redux';


class MapView extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div id="map" className='map'></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bounds: state.bounds
  }
}


const Map = connect(mapStateToProps)(MapView);

export default Map;
