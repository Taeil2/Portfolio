import React from 'react';
import LogosIcons from './../../../../other/logos-icons';
import Tippy from '@tippyjs/react';

const dictionary = {
  html: 'HTML',
  css: 'CSS',
  sass: 'SASS',
  bootstrap: 'Bootstrap',
  javascript: 'JavaScript',
  jquery: 'jQuery',
  react: 'React',
  angular: 'Angular',
  nodejs: 'Node.js',
  npm: 'npm',
  webpack: 'Webpack',
  github: 'GitHub',
  wordpress: 'WordPress',
  php: 'php',
  aspnet: 'ASP.NET',
  postgresql: 'PostgreSQL',
  express: 'Express',

  valueProposition: 'Value Proposition',
  competitiveAnalysis: 'Competitive Analysis',
  personas: 'Personas',
  userJourneys: 'User Journeys',
  userResearch: 'User Research',
  userInterviews: 'User Interviews',
  surveys: 'Surveys',
  quantitativeAndQualitativeAnalysis: 'Quantitative and Qualitative Analysis',
  informationArchitecture: 'Information Architecture', wireframes: 'Wireframes',
  prototypes: 'Prototypes',
  designSystems: 'Design Systems',
  sketch: 'Sketch',
  figma: 'Figma',
  invision: 'InVision',
  photoshop: 'Photoshop',
  illustrator: 'Illustrator',
  whimsical: 'Whimsical',
};

export default class Project extends React.Component {
  render() {
    let technologyImages = [];
    this.props.data.technologies.forEach((technology, i) => {
      let imageVar = LogosIcons[technology + "Image"];

      technologyImages.push(<Tippy key={i} content={dictionary[technology]} placement="bottom"><img src={imageVar} alt={dictionary[technology]} className="tooltip"></img></Tippy>);
    });

    let designImages = [];
    this.props.data.design.forEach((design, i) => {
      // let imageVar = LogosIcons[design + "ImageWhite"];
      let imageVar = LogosIcons[design + "Image"];

      designImages.push(<Tippy key={i} content={dictionary[design]} placement="bottom"><img src={imageVar} alt={dictionary[design]} className="tooltip"></img></Tippy>);
    });
    // this.props.data.design.map(design => design).join(' ')

    let githubLink = '';
    if (this.props.data.github.length > 0) {
      githubLink = <a href={this.props.data.github} className="github-link"><i className="fab fa-github"></i></a>;
    }
    let wireframeLink = '';
    if (this.props.data.wireframes.length > 0) {
      wireframeLink = <a href={this.props.data.wireframes} className="wireframe-link"><img src={LogosIcons.whimsicalImage} alt="Wireframe Icon" /></a>;
    }

    return (
      <section className="project hidden">
        <div className="content">
          <div className="image">
            <img src={this.props.data.image} alt={this.props.data.name + "Screenshot"} />
            <div className="tech-and-design">
              <div className="technologies">{technologyImages}</div>
              <div className="design">{designImages}</div>
            </div>
          </div>
          <div className="description">
            <h2>{this.props.data.name}</h2>
            <p>{this.props.data.description}</p>
            <div>
              <a href={this.props.data.url} className="btn">Visit Site</a>
              {githubLink}
              {wireframeLink}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
