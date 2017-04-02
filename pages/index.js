import Layout from '../components/MyLayout.js';
import React from 'react';
import Link from 'next/link';
import TwitterFeed from '../components/TwitterFeed'
import colors from '../theme/Colors'
import breakpoints from '../theme/Breakpoints'

export default () => (
  <Layout>
    <div className="section">
      <div className="section-content space-around">
        <div className="text">
          <p>This site design changes often. It's where I experiment, play, and learn.</p>
        </div>
        <TwitterFeed/>
      </div>
    </div>
    <style jsx>{`
      .section-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      @media (min-width: ${ breakpoints.minTablet }) {
        .section-content {
          flex-direction: row;
        }

        .text {
          margin-right: 20px;
        }
      }
  `}</style>
  </Layout>
)