import React from 'react';
import './project.scss';

export default class Project extends React.Component {
  render() {
    let githubLink = '';
    if (this.props.data.github.length > 0) {
      githubLink = <a href={this.props.data.github} className="github-link"><i className="fab fa-github"></i></a>;
    }

    return (
      <section className="project hidden">
        <div className="content">
          <div className="image">
            <img src={this.props.data.image} alt={this.props.data.name + "Screenshot"} />
            <div className={this.props.data.technologies.map(technology => technology).join(' ') + ' ' + this.props.data.design.map(design => design).join(' ')}>
              <div className="technologies">
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-js"></i>
              </div>
              <div className="skills">
              </div>
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
