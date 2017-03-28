import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
      <div className='kcm'>
        <Header id="header" ref="header" />
        <Content id="main" ref="main" />
        <Footer id="footer" ref="footer" />
      </div>
    );
  }
}