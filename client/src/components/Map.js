import React, { Component } from 'react';
import { connect } from 'react-redux';


class MapView extends Component {

  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className='map'>Map goes here</div>
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
