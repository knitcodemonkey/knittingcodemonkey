import React, { Component } from 'react';
import './Footer.css';
import Axios from 'axios';
import Social from './Social';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    var url = 'https://api.github.com/users/knittingcodemonkey';
    var that = this;
    Axios.get(url)
      .then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        that.setState({profile: response.data});
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  }

  render() {
    let year = new Date();
    return (
      <div className="footer w-90 pv3">
        <div className="footer-content__avatar fl pr3">
          <img className="br-pill" src={this.state.profile.avatar_url} alt="avatar" />
        </div>
        <div className="footer-content__contact flex flex-row justify-between">
          <span className="f4">{this.state.profile.name}</span>
          <span className="nowrap">{this.state.profile.company}</span>
          <Social github_url={this.state.profile.html_url} />
        </div>
        <div className="footer-content__bio">{this.state.profile.bio}</div>
        <div className="footer-content__copy">
          <span className="nowrap">&copy; 2007-{year.getFullYear()} KnittingCodeMonkey.com.</span> <span className="nowrap">This page was built using <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> and <a href="http://tachyons.io/" target="_blank">Tachyons.io</a></span>

        </div>
      </div>
    );
  }
}

export default Footer;
