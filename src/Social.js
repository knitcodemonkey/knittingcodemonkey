import React, { PropTypes } from 'react';
import github from './svg/github.svg'
import twitter from './svg/twitter.svg'

const styles = {
  icon: {
    width: 24,
    alignItems: 'center'
  },
  social: {
    height: 24
  }
};

class Social extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github_url: this.props.github_url || ''
    };
  }

  render() {
    return (
      <div className="social" style={styles.social}>
        <span><a className="pr3" href={this.props.github_url} target="_blank"><img src={github} aria-hidden="true" alt="github" style={styles.icon} /></a></span>
        <span><a href="https://twitter.com/knitcodemonkey"><img src={twitter} aria-hidden="true" alt="twitter" style={styles.icon} /></a></span>
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