import React, { Component } from 'react';

import Loader from '../components/Loader'

class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Loader />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loading;