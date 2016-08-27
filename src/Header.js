require('../sass/components/header.scss');
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <img src="/img/kcm4Lg.png" alt="Knitting Code Monkey Logo" />
        </div>
      </div>
    );
  }
}