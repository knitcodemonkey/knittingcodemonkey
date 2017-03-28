require('../sass/header.scss');
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="header-content">
          <ul className="header-content__nav">
            <li><a href="" title="Contact Me">Contact</a></li>
            <li><a href="" title="About Me">About Me</a></li>
            <li><a href="" title="Upcoming Events">Upcoming Events</a></li>
            <li><a href="http://strongishfiber.com" title="">The other me</a></li>
          </ul>
        </div>
      </div>
    );
  }
}