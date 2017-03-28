import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
      <div className='kcm'>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}