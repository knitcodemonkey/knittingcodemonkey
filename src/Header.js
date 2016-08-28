require('../sass/header.scss');
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <ul>
            <li><a href="" title="">Contact</a></li>
            <li><a href="" title="">About</a></li>
            <li><a href="" title="">Upcoming Events</a></li>
            <li><a href="http://strongishfiber.com" title="">The other me</a></li>
          </ul>
        </div>
      </div>
    );
  }
}