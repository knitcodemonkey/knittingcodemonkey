import React, { PropTypes } from 'react';

class Social extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github_url: this.props.github_url || ''
    };
  }

  render() {
    return (
      <div className="social">
        <span><a href={this.props.github_url} target="_blank"><img src="/static/svg/github.svg" aria-hidden="true" /></a></span>
        <span><a href="https://twitter.com/knitcodemonkey"><img src="/static/svg/twitter.svg" aria-hidden="true" /></a></span>
        <style jsx>{`
          .social {
            margin-right: 0;
            padding: 0;
            height: 24px;
          }

          span {
            padding: 0 10px 0 0;
            display: inline-block;
          }

          span:last-of-type {
            padding: 0;
          }

          img {
            width: 24px;
            margin: 0;

          }
        `}</style>
      </div>
    );
  }
}

Social.propTypes = {
  github_url: PropTypes.string.isRequired,
};
Social.defaultProps = {
  github_url: ''
};

export default Social;