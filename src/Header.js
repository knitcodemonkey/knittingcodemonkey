import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="nav flex flex-row justify-between ph4">
        <a className="pa1" href="/">Home</a>
        <a className="pa1" href="/about">About</a>
        <a className="pa1" href="http://strongishfiber.com">Expecting fiber arts?</a>
      </div>
    );
  }
}

export default Header;
