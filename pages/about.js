import Layout from '../components/MyLayout.js'
import React from 'react';
import Link from 'next/link'
import colors from '../theme/Colors'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <div id="main">
      <div className="main-content space-around">
        <img className="main-content__avatar curve" src="../static/img/KnittingCodeMonkey.jpg" alt="Jen Luker" />
        <div className="main-content__details">
          <h1 className="title">Jen Luker</h1>
          <div className="job">
            <div className="info">Senior Software Engineer</div>
            <div className="info">Deseret Digital Media</div>
            <div className="info">KSL.com Classifieds Team</div>
          </div>
          <p className="text">
            Jen Luker is a senior software engineer at <Link href="http://deseretdigital.com"><a>DDM</a></Link> working on the KSL.com Classifieds; a Northern Utah classifieds site that beats the national brand on listings and traffic. Jen has spent a majority of her decade-long career as a full-stack developer using PHP, Javascript, and CSS, but has a particular fondness for front-end technologies. She is a leader on front-end teams, trains others in Reactjs, and build apps in React Native. Her spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job. You can find out more about her adventures in fiber arts at <Link href="http://strongishfiber.com"><a>strongishfiber.com</a></Link>
          </p>

          <p className="text">
            tl;dr:
          </p>
          <p className="text">
            When JenDev isn't knitting, she is a senior software engineer at <Link href="http://deseretdigital.com"><a>DDM</a></Link>. Over a decade of programming experience has given her mad skillz in making Internet Explorer work like the rest of the web, and a knack for picking out the missing comma in a screen full of code.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
    .main-content__avatar {
      width: 33%;
      height: 33%;
      max-width: 300px;
      float: left;
      margin: 0 10px 0 0;
      border-radius: 10px;
      border: 1px solid ${ colors.border };
    }

    .main-content__details {
      width: 100%;
      padding: 0;
      flex-direction: row;

    .title {
      margin: 10px 0;
      line-height: 100%;
    }

    .text {
      margin: 10px 0;
    }
  `}</style>
  </Layout>
)