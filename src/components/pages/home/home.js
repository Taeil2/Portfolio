import React from 'react';
import './home.scss';
import { RoughNotation } from 'react-rough-notation';
import { Link } from 'react-router-dom';
// import animation from './animation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUnderline1: false,
      showUnderline2: false
    }
  }
  componentDidMount() {
    // animation.init();
    // if (!animation.animationRun) { // object kept speeding up.
    //   animation.animate();
    //   animation.animationRun = true;
    // }

    setTimeout(() => {
      this.setState({
        showUnderline1: true
      })
    }, 1000)

    setTimeout(() => {
      this.setState({
        showUnderline2: true
      })
    }, 2000)
  }

  render() {
    return (
      <div className="home-page background">
        <div className="wrapper">
          {/* <div><img src="http://via.placeholder.com/200x200"></img></div> */}
          <div className="intro">
            <h1>Hi, my name is <strong className="name">Taeil Kwak</strong></h1>
            <h2>
              I am a <RoughNotation type="underline" strokeWidth="5" padding="2" color="#FFA726" show={this.state.showUnderline1}><span className="ux-designer underline">UI/UX designer</span></RoughNotation>
              <br />and <RoughNotation type="underline" strokeWidth="5" padding="2" color="#42A5F5" show={this.state.showUnderline2}><span className="developer underline">software engineer</span></RoughNotation>
            </h2>
            <div class="btn-container">
              <Link to="/work" className="btn">See my work</Link>
              <Link to="/contact" className="btn">Contact me</Link>
            </div>
            {/* <h3>I like to create enjoyable and useable experiences.</h3> */}
          </div>
          {/* <div id="animation">
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
