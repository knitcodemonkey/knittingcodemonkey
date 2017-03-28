require('../sass/content.scss');
import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
          <img src="/img/JenLukerAvatar.jpeg" alt="Jen Luker" />
          <div className="main-content__words">
            <p>

            </p>
          </div>
        </div>
      </div>
    );
  }
}