import React from 'react';
import Axios from 'axios';
import Link from 'next/link'
import Social from '../components/Social';
import colors from '../theme/Colors'
import breakpoints from '../theme/Breakpoints'

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
      <div className="footer space-around">
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
          &copy; 2007-{year.getFullYear()} KnittingCodeMonkey.com. This page was built using <Link href="https://zeit.co/blog/next2"><a>next2</a></Link>, <Link href="https://facebook.github.io/react/"><a>react</a></Link>, and <Link href="https://yarnpkg.com/en/"><a>yarn</a></Link>

        </div>

        <style jsx>{`
          .footer-content__avatar {
            text-align: left;
            float: left;
            margin: 0 10px 0 0;
          }

          img {
            width: 100px;
            height: auto;
            border-radius: 50px;
          }

          .footer-content__contact {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch;
            flex: 1 100%;
            padding: 10px 0;
            height: 80px;
          }

          .footer-content__contact > span {
            -webkit-hyphens: none;
            -moz-hyphens: none;
            hyphens: none;
            white-space: pre-wrap;
          }

          .footer-content__bio {
            clear: both;
            padding: 10px 0;
          }

          .footer-content__copy {
            clear: both;
            font-size: 10px;
            color: ${ colors.disabledText };
            text-align: right;
          }

          @media (min-width: ${ breakpoints.minTablet }) {
            .footer {
              max-width: calc(${ breakpoints.minTablet } - 40px);
            }

            .footer-content__avatar {
              float: left;
              height: 100px;
              margin-right: 20px;
            }

            .footer-content__contact {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              height: auto;
              flex: 0 100%;
            }

            .footer-content__bio {
              clear: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;