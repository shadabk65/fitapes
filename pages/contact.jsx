import React, { Component } from 'react';
import Us from '../components/Contact';
import Download from '../components/Download';
class contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Us/>
        <Download/>
      </React.Fragment>
    );
  }
}

export default contact;