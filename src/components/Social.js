require('../../sass/components/social.scss');
import React, { Component, PropTypes } from 'react';

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
        <span><a href={this.props.github_url} target="_blank"><img src="/img/svg/github.svg" aria-hidden="true" /></a></span>
        <span><a href="https://twitter.com/knitcodemonkey"><img src="/img/svg/twitter.svg" aria-hidden="true" /></a></span>
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