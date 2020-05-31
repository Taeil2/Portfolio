import React from 'react';
import './project.scss';
import LogosIcons from './../../../../other/logos-icons';
import Tippy from '@tippyjs/react';

export default class Project extends React.Component {
  render() {
    let technologyImages = [];
    this.props.data.technologies.forEach(technology => {
      let imageVar = LogosIcons[technology + "Image"];

      technologyImages.push(<Tippy content={technology} placement="bottom"><img src={imageVar} alt={technology} className="tooltip"></img></Tippy>);
    });

    let designImages = [];
    // this.props.data.design.map(design => design).join(' ')

    let githubLink = '';
    if (this.props.data.github.length > 0) {
      githubLink = <a href={this.props.data.github} className="github-link"><i className="fab fa-github"></i></a>;
    }
    let wireframeLink = '';
    if (this.props.data.wireframes.length > 0) {
      wireframeLink = <a href={this.props.data.wireframes} className="wireframe-link"><img src={LogosIcons.whimsicalImage} /></a>;
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
            <h3>{this.props.data.name}</h3>
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
