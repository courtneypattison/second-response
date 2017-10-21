import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Wrapper from './Wrapper';

const Help = withRouter(({history}) => (
  <Wrapper header="Second Response">
    <div className="help">
      <p>
        Connecting those in need, to those
        who can volunteer to help!
      </p>
      <div className="cta-container">
        <button className="cta-dark"
                onClick={() => history.push("/ask") }>
          I need help
        </button>
        <button className="cta-light"
                onClick={() => history.push("/list") }>
          I can help
        </button>
      </div>
    </div>
  </Wrapper>
));


export default Help;
