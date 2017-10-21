import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Wrapper from './Wrapper';

const Help = withRouter(({history}) => (
  <Wrapper header="What would you like to do?">
    <div className="help">
      <div className="cta-container">
        <button className="cta-light"
                onClick={() => history.push("/ask") }>
          I need help
        </button>
        <button className="cta-dark"
                onClick={() => history.push("/list") }>
          I can help
        </button>
      </div>
    </div>
  </Wrapper>
));


export default Help;
