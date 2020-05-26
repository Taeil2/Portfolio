import React from 'react';
import Category from './category/category';
import './skills.scss';
import { NavLink } from 'react-router-dom';

import htmlImage from './../../../images/tech-logos/html5-mark.svg';
import cssImage from './../../../images/tech-logos/css3-mark.svg';
import sassImage from './../../../images/tech-logos/sass-circle.svg';
import bootstrapImage from './../../../images/tech-logos/bootstrap.svg';
import javascriptImage from './../../../images/tech-logos/javascript-small.png';
import jqueryImage from './../../../images/tech-logos/jquery.svg';
import reactImage from './../../../images/tech-logos/react.svg';
import angularImage from './../../../images/tech-logos/angular.svg';
import nodejsImage from './../../../images/tech-logos/nodejs-icon.svg';
import npmImage from './../../../images/tech-logos/npm-red.svg';
import webpackImage from './../../../images/tech-logos/webpack-noborder.svg';
import githubImage from './../../../images/tech-logos/github.svg';
import wordpressImage from './../../../images/tech-logos/wordpress.svg';
import phpImage from './../../../images/tech-logos/php.svg';

export default class Skills extends React.Component {
  // Each skill goes into a category
  // Each skill has a title, image, and image apsect ratio
  skills = {
    Development: {
      Web: [['HTML', htmlImage, 'tall'], ['CSS', cssImage, 'tall'], ['SASS', sassImage, 'square'], ['Bootstrap', bootstrapImage, 'square']],
      JavaScript: [['JavaScript', javascriptImage, 'tall'], ['jQuery', jqueryImage, 'square'], ['React', reactImage, 'square'], ['Angular', angularImage, 'tall'], ['Node.js', nodejsImage, 'square'], ['npm', npmImage, 'wide'], ['Webpack', webpackImage, 'square']],
      Other: [['GitHub', githubImage, 'square'], ['WordPress', wordpressImage, 'square'], ['php', phpImage, 'wide']]
    },
    Design: {
      Planning: [['Value Proposition', htmlImage, 'tall'], ['Competitive Analysis', cssImage, 'tall'], ['Personas', sassImage, 'square'], ['User Journeys', bootstrapImage, 'square']],
      Discovery: [['User Research', javascriptImage, 'tall'], ['User Interviwes', jqueryImage, 'square'], ['Surveys', reactImage, 'square'], ['Quantitative and Qualitative Analysis', angularImage, 'tall']],
      Creation: [['Information Architecture', githubImage, 'square'], ['Wireframes', wordpressImage, 'square'], ['Prototypes', phpImage, 'wide'], ['Design Systems', phpImage, 'wide']],
      Tools: [['Sketch', githubImage, 'square'], ['Figma', wordpressImage, 'square'], ['InVision', phpImage, 'wide'], ['Photoshop', phpImage, 'wide'], ['Illustrator', phpImage, 'wide']]
    }
  };

  constructor(props) {
    super(props)
    this.state = {
      activeSection: Object.keys(this.skills)[0]
    }
  }

  handleClick(e) {
    this.setState({activeSection: e.target.value});
    this.animateSkills();
  }

  animateSkills() {
    const hiddenElements = document.querySelectorAll('.hidden');
    Array.from(hiddenElements).forEach((element, index) => {
      setTimeout(function() {
        element.classList.remove('hidden');
      }, 150*index);
    });
  }

  render() {
    let sectionButtons = [];
    let i = 0;
    for (let key in this.skills) {
      sectionButtons.push(<button type="button" onClick={(e) => this.handleClick(e)} value={key} key={i}>{key}</button>);
      i++;
    }

    let categories = [];
    i = 0;
    for (let key in this.skills[this.state.activeSection]) {
      categories.push(<Category name={key} skill={this.skills[this.state.activeSection][key]} key={this.state.activeSection + '-' + i}/>);
      i++;
    }

    return (
      <div className="skills-page background">
        <div className="wrapper">
          <div className="buttons-container">{sectionButtons}</div>
          {categories}
          <div id="attribution"><NavLink to="/attribution" >Icons are from various creators from the Noun Project</NavLink></div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this.animateSkills();
  }
}
