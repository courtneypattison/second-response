import React, { Component } from 'react';
import Help from './Help';

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>{this.props.header}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
