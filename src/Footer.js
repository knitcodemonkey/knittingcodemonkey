require('../sass/footer.scss');
import React, { Component, PropTypes } from 'react';
import Axios from 'axios';
import Social from './components/Social';

class Footer extends React.Component {
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
    var year = new Date();
    return (
      <div id="footer">
        <div className="footer-content">
          <div className="footer-content__avatar">
            <img src={this.state.profile.avatar_url} alt="avatar" />
          </div>
          <div className="footer-content__contact">
            <span>{this.state.profile.name}</span>
            <span>{this.state.profile.company}</span>
            <Social github_url={this.state.profile.html_url} />
          </div>
          <div className="footer-content__bio">{this.state.profile.bio}</div>
          <div className="footer-content__copy">
            &copy; 2007-{year.getFullYear()} KnittingCodeMonkey.com
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;