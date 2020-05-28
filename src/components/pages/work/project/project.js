import React from 'react';
import './project.scss';
import LogosIcons from './../../../../other/logos-icons';

export default class Project extends React.Component {
  render() {
    let technologyImages = [];
    this.props.data.technologies.forEach(technology => {
      let imageVar = LogosIcons.technology + "Image";
      console.log(imageVar);
      console.log(eval(imageVar));
      console.log(window[imageVar]);

      let imageName = window[imageVar];
      technologyImages.push(<img src={imageName} alt={technology}></img>);
    });

    let designImages = [];
    // this.props.data.design.map(design => design).join(' ')

    let githubLink = '';
    if (this.props.data.github.length > 0) {
      githubLink = <a href={this.props.data.github} className="github-link"><i className="fab fa-github"></i></a>;
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
            </div>
          </div>
        </div>
      </section>
    );
  }

}