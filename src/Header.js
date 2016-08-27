import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header" style={styles.header}>
        <div className="header-content" style={styles.headerContent}>
          <img src="/img/kcm4Lg.png" alt="Knitting Code Monkey Logo" />
        </div>
      </div>
    );
  }
}

var styles = {
  header: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#40698c',
  },
  headerContent: {
    maxWidth: '280px',
    margin: "0px auto",
    display: "block"
  }

};