require('../sass/content.scss');
import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
          <img className="main-content__avatar curve" src="/img/JenLukerAvatar.jpeg" alt="Jen Luker" />
          <div className="main-content__details">
            <h1 className="title">Jen Luker</h1>
            <div className="job">
              <div className="info">Senior Software Engineer</div>
              <div className="info">Deseret Digital Media</div>
              <div className="info">KSL.com Classifieds Team</div>
            </div>
            <p className="text">
              Jen (JenDev) Luker is a senior software engineer at DDM working on the KSL.com Classifieds; a Northern Utah classifieds site that beats the national brand on listings and traffic. Jen is a Javascript craftsman with 10 years of experience and a leader on front-end teams. She spends time building apps in React Native. Her spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job.
            </p>
          </div>
        </div>
      </div>
    );
  }
}