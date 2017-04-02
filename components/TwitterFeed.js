import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import colors from '../theme/Colors'

class TwitterFeed extends React.Component {
  render() {
    return (
      <div className="twitter-feed">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'knitcodemonkey',
            }}
            options={{
              username: 'knitcodemonkey',
              target: '.twitter-feed',
              height: '400'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        <style jsx>{`
          .twitter-feed {
            border: 1px solid ${ colors.border };
            line-height: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default TwitterFeed;