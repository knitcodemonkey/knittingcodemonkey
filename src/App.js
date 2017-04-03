import React, { Component } from 'react';
import './App.css';
import avatar from './img/KnittingCodeMonkey.jpg'

class App extends Component {
  render() {
    return (
      <div className="main bg-light-gray flex flex-row justify-around pa3 mv3 br4">
        <div className="main-content">
          <img className="main-content__avatar mr3 br3" src={avatar} alt="Jen Luker" />
          <div className="main-content__details">
            <h1 className="title">Jen Luker</h1>
            <div className="job">
              <div className="info">Senior Software Engineer</div>
              <div className="info">Deseret Digital Media</div>
              <div className="info">KSL.com Classifieds Team</div>
            </div>
            <p className="text">
              Jen Luker is a senior software engineer at <a href="http://deseretdigital.com">DDM</a> working on the KSL.com Classifieds; a Northern Utah classifieds site that beats the national brand on listings and traffic. Jen has spent a majority of her decade-long career as a full-stack developer using PHP, Javascript, and CSS, but has a particular fondness for front-end technologies. She is a leader on front-end teams, trains others in Reactjs, and build apps in React Native. Her spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job. You can find out more about her adventures in fiber arts at <a href="http://strongishfiber.com">strongishfiber.com</a>
            </p>

            <p className="text f3">
              tl;dr:
            </p>
            <p className="text">
              When JenDev isn't knitting, she is a senior software engineer at <a href="http://deseretdigital.com">DDM</a>. Over a decade of programming experience has given her mad skillz in making Internet Explorer work like the rest of the web, and a knack for picking out the missing comma in a screen full of code.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
