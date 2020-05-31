import React from 'react';
import './home.scss';
import animation from './animation';

class Home extends React.Component {
  componentDidMount() {
    animation.init();
    if (!animation.animationRun) { // object kept speeding up.
      animation.animate();
      animation.animationRun = true;
    }
  }

  render() {
    return (
      <div className="home-page background">
        <div className="wrapper">
          <div className="intro">
            <h1>Hi, my name is <strong className="">Taeil Kwak</strong> and I am a <span className="ux-designer underline">UX designer</span> and <span className="developer underline">developer.</span></h1>
            <h3>I like to create enjoyable and useable experiences.</h3>
          </div>
          <div id="animation">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
