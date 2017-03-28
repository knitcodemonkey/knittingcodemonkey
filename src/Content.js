require('../sass/content.scss');
import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
          <img src="/img/kcm_logo_2.jpg" alt="Knitting Code Monkey Logo" />
          <div className="main-content__words">
            <p>

            </p>
          </div>
        </div>
      </div>
    );
  }
}