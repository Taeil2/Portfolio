import React from 'react';
import Category from './category/category';
import './skills.scss';
import { NavLink } from 'react-router-dom';
import LogosIcons from './../../../other/logos-icons';

export default class Skills extends React.Component {
  // Each skill goes into a category
  // Each skill has a title, image, and image apsect ratio
  skills = {
    Development: {
      'Front End': [['HTML', LogosIcons.htmlImage, 'tall'], ['CSS', LogosIcons.cssImage, 'tall'], ['SASS', LogosIcons.sassImage, 'square'], ['Bootstrap', LogosIcons.bootstrapImage, 'square'], ['JavaScript', LogosIcons.javascriptImage, 'square'], ['React', LogosIcons.reactImage, 'square'], ['Angular', LogosIcons.angularImage, 'tall'], ['jQuery', LogosIcons.jqueryImage, 'square']],
      'Back End': [['Node.js', LogosIcons.nodejsImage, 'square'], ['npm', LogosIcons.npmImage, 'wide'], ['Express', LogosIcons.expressImage, 'square'], ['PostgreSQL', LogosIcons.postgresqlImage, 'square']],
      Other: [['GitHub', LogosIcons.githubImage, 'square'], ['WordPress', LogosIcons.wordpressImage, 'square'], ['php', LogosIcons.phpImage, 'wide']]
      // Unused: [['npm', LogosIcons.npmImage, 'wide'], ['Webpack', LogosIcons.webpackImage, 'square']]
      // Web: [['HTML', LogosIcons.htmlImage, 'tall'], ['CSS', LogosIcons.cssImage, 'tall'], ['SASS', LogosIcons.sassImage, 'square'], ['Bootstrap', LogosIcons.bootstrapImage, 'square']],
      // JavaScript: [['JavaScript', LogosIcons.javascriptImage, 'square'], ['jQuery', LogosIcons.jqueryImage, 'square'], ['React', LogosIcons.reactImage, 'square'], ['Angular', LogosIcons.angularImage, 'tall'], ['Node.js', LogosIcons.nodejsImage, 'square'], ['npm', LogosIcons.npmImage, 'wide'], ['Webpack', LogosIcons.webpackImage, 'square']],
      // Other: [['GitHub', LogosIcons.githubImage, 'square'], ['WordPress', LogosIcons.wordpressImage, 'square'], ['php', LogosIcons.phpImage, 'wide']]
    },
    Design: {
      Planning: [['Value Proposition', LogosIcons.valuePropositionImage, 'square'], ['Competitive Analysis', LogosIcons.competitiveAnalysisImage, 'square'], ['Personas', LogosIcons.personasImage, 'tall'], ['User Journeys', LogosIcons.userJourneysImage, 'square']],
      Discovery: [['User Research', LogosIcons.userResearchImage, 'tall'], ['User Interviews', LogosIcons.userInterviewsImage, 'tall'], ['Surveys', LogosIcons.surveysImage, 'tall'], ['Quantitative and Qualitative Analysis', LogosIcons.quantitativeAndQualitativeAnalysisImage, 'square']],
      Creation: [['Information Architecture', LogosIcons.informationArchitectureImage, 'square'], ['Wireframes', LogosIcons.wireframesImage, 'square'], ['Prototypes', LogosIcons.prototypesImage, 'square'], ['Design Systems', LogosIcons.designSystemsImage, 'square']],
      Tools: [['Sketch', LogosIcons.sketchImage, 'square'], ['Figma', LogosIcons.figmaImage, 'tall'], ['InVision', LogosIcons.invisionImage, 'square'], ['Photoshop', LogosIcons.photoshopImage, 'square'], ['Illustrator', LogosIcons.illustratorImage, 'square']]
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
    let skillButtons = document.getElementsByClassName('skill-filter');
    for (let skillButton of skillButtons) {
      skillButton.classList.remove('active')
    }
    e.target.classList.add('active');
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
    let activeClass = '';
    for (let key in this.skills) {
      if (i === 0) {
        activeClass = 'active';
      } else {
        activeClass = '';
      }
      sectionButtons.push(<button type="button" className={"skill-filter " + activeClass} onClick={(e) => this.handleClick(e)} value={key} key={i}>{key}</button>);
      i++;
    }

    let categories = [];
    i = 0;
    for (let key in this.skills[this.state.activeSection]) {
      categories.push(<Category name={key} skill={this.skills[this.state.activeSection][key]} key={this.state.activeSection + '-' + i}/>);
      i++;
    }

    return (
      <div className={"skills-page background " + this.state.activeSection}>
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
